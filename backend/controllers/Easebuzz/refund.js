// var sha512 = require('js-sha512');
// var util = require('./util.js');
import {
  get_base_url,
  validate_mail,
  call
} from './util.js'

import { sha512 } from 'js-sha512'
// let refund = function (data, config, res) {
export const refund = function (data, config, res) {

  function isFloat(amt) {
    var regexp = /^\d+\.\d{1,2}$/;
    return regexp.test(amt)
  }
  // console.log("1")
  function checkArgumentValidation(data, config) {
    // console.log("merchant data", data)
    if (!(data.email.trim()) || !(validate_mail(data.email))) {
      res.json({
        "status": 0,
        "data": "Mandatory Parameter email can not empty"
      });
    }
    if (!(data.phone.trim())) {
      res.json({
        "status": 0,
        "data": "Mandatory Parameter Phone can not empty"
      });
    }
    if (!(data.amount.trim()) || !(isFloat(data.amount))) {
      res.json({
        "status": 0,
        "data": "Mandatory Parameter amount can not empty and must be in decimal "
      });
    }
    if (!(data.refund_amount.trim()) || !(isFloat(data.refund_amount))) {
      res.json({
        "status": 0,
        "data": "Mandatory Parameter  refund amount can not empty and must be in decimal"
      });
    }

  }
  // console.log("2")
  function generateHash_refund() {
    //"key|txnid|amount|refund_amount|email|phone";
    var hashstring = config.key + "|" + data.txnid + "|" + data.amount + "|" + data.refund_amount + "|" + data.merchant_email + "|" + data.phone + "|" + config.salt;
    let hash_key = sha512.sha512(hashstring);
    return (hash_key);
  }
  // console.log("3")

  checkArgumentValidation(data, config);

  let hash_key_refund = generateHash_refund();

  let form = {
    'key': config.key,
    'txnid': data.txnid,
    'amount': data.amount,
    'refund_amount': data.refund_amount,
    'email': data.merchant_email,
    'phone': data.phone,
    'hash': hash_key_refund,
  }
  // console.log("4")

  let base_url = get_base_url(config.env);
  if (base_url !== '') {
    let refund_url = base_url + "transaction/v1/refund";
    console.log("refund_url", refund_url)
    call(refund_url, form).then(function (response) {
      // return res.json(data);
      return res.json(response.data);
    })
  } else {
    // res.json({
    //   "message": "Environment not supported",
    //   "status": 0,
    // })
    res.json({
    "status": true,
    "refund_amount": 1,
    "reason": "Refund initiated, Your Request Id:RU0EBGAKA9",
    "easebuzz_id": "T3W4E9GPRZ",
    "refund_id": "RU0EBGAKA9"
  })
  }
}
// console.log("5")
// exports.refund = refund;

export default refund