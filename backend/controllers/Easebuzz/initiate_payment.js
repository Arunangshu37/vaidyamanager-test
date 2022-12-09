// var util = require('./util.js');
import {
  validate_mail,
  validate_phone,
  call
} from './util.js'

import { sha512 } from 'js-sha512'

export const initiate_payment = function (data, config, res) {

  function isFloat(amt) {
    var regexp = /^\d+\.\d{1,2}$/;
    return regexp.test(amt)

  }
  // console.log("1")

  function checkArgumentValidation(data, config) {

    if (!data.name.trim()) {
      res.json({
        "status": 0,
        "data": "Mandatory Parameter name can not empty"
      });
    }
    if (!(data.amount.trim()) || !(isFloat(data.amount))) {
      res.json({
        "status": 0,
        "data": "Mandatory Parameter amount can not empty and must be in decimal "
      });
    }
    if (!(data.txnid.trim())) {
      res.json({
        "status": 0,
        "data": "Merchant Transaction validation failed. Please enter proper value for merchant txn"
      });
    }
    if (!(data.email.trim()) || !(validate_mail(data.email))) {
      res.json({
        "status": 0,
        "data": "Email validation failed. Please enter proper value for email"
      });
    }
    if (!(data.phone.trim()) || validate_phone(data.phone)) {
      res.json({
        "status": 0,
        "data": "Phone validation failed. Please enter proper value for phone"
      });
    }
    if (!(data.productinfo.trim())) {
      res.json({
        "status": 0,
        "data": "Mandatory Parameter Product info cannot be empty"
      });
    }
    if (!(data.surl.trim()) || !(data.furl.trim())) {
      res.json({
        "status": 0,
        "data": "Mandatory Parameter Surl/Furl cannot be empty"
      });
    }
  }
  // console.log("2")
  function geturl(env) {
    let url_link;
    // console.log("env", env)
    if (env == 'test') {
      url_link = "https://testpay.easebuzz.in/";

    } else if (env == 'prod') {
      url_link = 'https://pay.easebuzz.in/';
    } else {
      url_link = "https://testpay.easebuzz.in/";
    }
    return url_link;
  }
  // console.log("3")
  
  function form() {
    form = {
      'key': config.key,
      'txnid': data.txnid,
      'amount': data.amount,
      'email': data.email,
      'phone': data.phone,
      'firstname': data.name,
      'udf1': data.udf1,
      'udf2': data.udf2,
      'udf3': data.udf3,
      'udf4': data.udf4,
      'udf5': data.udf5,
      'hash': hash_key,
      'productinfo': data.productinfo,
      'udf6': data.udf6,
      'udf7': data.udf7,
      'udf8': data.udf8,
      'udf9': data.udf9,
      'udf10': data.udf10,
      'furl': data.furl, //'http://localhost:3000/response',
      'surl': data.surl, //'http://localhost:3000/response'
    }
    if (data.unique_id != '') {
      form.unique_id = data.unique_id
    }


    if (data.split_payments != '') {
      form.split_payments = data.split_payments
    }

    if (data.sub_merchant_id != '') {
      form.sub_merchant_id = data.sub_merchant_id
    }

    if (data.customer_authentication_id != '') {
      form.customer_authentication_id = data.customer_authentication_id
    }

    return form;
  }
  // console.log("4")
  // main calling part is below

  checkArgumentValidation(data, config);
  var hash_key = generateHash();
  var payment_url = "https://testpay.easebuzz.in/";
  var call_url = payment_url + 'payment/initiateLink';
  call(call_url, form()).then(function (response) {
    console.log("response.data", response.data, payment_url)
    pay(response.data, payment_url)

  });
  // console.log("5")

  function pay(access_key, url_main) {

    if (config.enable_iframe == 0) {
      var url = url_main + 'pay/' + access_key;
      //send mail
      return res.send(url);
      // return res.redirect(url);

    } else {
      res.render("enable_iframe.html", {
        'key': config.key,
        'access_key': access_key
      });

    }
  }

  // console.log("6")
  function generateHash() {

    var hashstring = config.key + "|" + data.txnid + "|" + data.amount + "|" + data.productinfo + "|" + data.name + "|" + data.email +
      "|" + data.udf1 + "|" + data.udf2 + "|" + data.udf3 + "|" + data.udf4 + "|" + data.udf5 + "|" + data.udf6 + "|" + data.udf7 + "|" + data.udf8 + "|" + data.udf9 + "|" + data.udf10;
    hashstring += "|" + config.salt;
    data.hash = sha512.sha512(hashstring);
    return (data.hash);
  }
  // console.log("7")
}

// exports.initiate_payment = initiate_payment;
export default initiate_payment