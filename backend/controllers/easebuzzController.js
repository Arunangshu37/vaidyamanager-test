
import asyncHandler from 'express-async-handler'
import Easebuzz from '../models/easebuzzModel.js'
import Consultant from '../models/consultationModel.js'
import Initiate_Payment from '../models/initiate_paymentModel.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { sha512 } from 'js-sha512'
import { initiate_payment } from './Easebuzz/initiate_payment.js'
import { refund } from './Easebuzz/refund.js'
import nodemailer from 'nodemailer'
// const sendgridTransport = require('nodemailer-sendgrid-transport')
import sendgridTransport from 'nodemailer-sendgrid-transport'
import crypto from 'crypto';
import Refund from '../models/refundModel.js'

const transporter = nodemailer.createTransport(sendgridTransport({
  // auth object
  auth: {
    api_key: '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'
  }
}))


dotenv.config()

var config = {
  key: process.env.EASEBUZZ_KEY,
  salt: process.env.EASEBUZZ_SALT,
  env: process.env.EASEBUZZ_ENV,
  enable_iframe: process.env.EASEBUZZ_IFRAME,
  // key: "2PBP7IABZ2",
  // salt: "DAH88E3UWQ",
  // env: "test",
  // enable_iframe: 0,
};

const initiatePayment = asyncHandler(async (req, res) => {
  const data = req.body;
  //  console.log("data",data)
  // var initiate_payment = require('./Easebuzz/initiate_payment.js');
  initiate_payment(data, config, res);
  // console.log("ressss", res)
  res.status(200);
})

//  add easebuzz
const addEasebuzz = asyncHandler(async (req, res) => {

  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    isPaid,
    isDelivered,
    status,
    isDispatched,
    deliveredAt,
    paidAt,
    paymentResult

  } = req.body


  const easebuzz = new Easebuzz({
    // _id: req.params.id,
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    isPaid,
    isDelivered,
    status,
    isDispatched,
    deliveredAt,
    paidAt,
    paymentResult
  })

  const createdData = await easebuzz.save()
  // Get user data 

  // save payment details in user 
  // console.log(createdData.paymentResult, createdData.isPaid);

  res.status(201).json(createdData);

  // data = req.body;
  // var initiate_payment = require('./Easebuzz/initiate_payment.js');
  // initiate_payment.initiate_payment(data, config, res);
})


//Initiate Payment Response
const paymentResponse = asyncHandler(async (req, res) => {

  const {
    name_on_card,
    bank_ref_num,
    udf3,
    hash,
    firstname,
    net_amount_debit,
    payment_source,
    surl,
    error_Message,
    issuing_bank,
    cardCategory,
    phone,
    easepayid,
    cardnum,
    key,
    udf8,
    unmappedstatus,
    PG_TYPE,
    cash_back_percentage,
    status,
    udf1,
    merchant_logo,
    udf6,
    udf10,
    txnid,
    productinfo,
    furl,
    card_type,
    amount,
    udf2,
    udf5,
    mode,
    udf7,
    error,
    udf9,
    bankcode,
    deduction_percentage,
    email,
    udf4
  } = req.body

  const initiate_paymentData = new Initiate_Payment({
    name_on_card,
    bank_ref_num,
    udf3,
    hash,
    firstname,
    net_amount_debit,
    payment_source,
    surl,
    error_Message,
    issuing_bank,
    cardCategory,
    phone,
    easepayid,
    cardnum,
    key,
    udf8,
    unmappedstatus,
    PG_TYPE,
    cash_back_percentage,
    status,
    udf1,
    merchant_logo,
    udf6,
    udf10,
    txnid,
    productinfo,
    furl,
    card_type,
    amount,
    udf2,
    udf5,
    mode,
    udf7,
    error,
    udf9,
    bankcode,
    deduction_percentage,
    email,
    udf4
  })

  if (initiate_paymentData.status === "success") {
    const consultant = await Consultant.findById(req.params.id)
    // console.log("Consultant is", consultant)
    if (consultant) {
      // console.log("first")
      // console.log(req.body)
      if (req.body.status === "success") {
        consultant.payment_status = "Paid"
        //notifiaction
      }
      else {
        consultant.payment_status = "Fail"
      }
      const ConsultantUpdate = await consultant.save()
      transporter.sendMail({
        to: consultant.patientEmail_address,
        from: "info@mindvein.com",
        subject: "Your Payment is Done",
        html: "<h1>Payment Done Successfully!</h1>"
      })

      // console.log("ConsultantUpdate", ConsultantUpdate)
      // res.json(ConsultantUpdate)

      const createdPayment = await initiate_paymentData.save();

      function checkReverseHash(response) {
        var hashstring = config.salt + "|" + response.status + "|" + response.udf10 + "|" + response.udf9 + "|" + response.udf8 + "|" + response.udf7 +
          "|" + response.udf6 + "|" + response.udf5 + "|" + response.udf4 + "|" + response.udf3 + "|" + response.udf2 + "|" + response.udf1 + "|" +
          response.email + "|" + response.firstname + "|" + response.productinfo + "|" + response.amount + "|" + response.txnid + "|" + response.key
        let hash_key = sha512.sha512(hashstring);
        if (hash_key == req.body.hash)
          return true;
        else
          return false;
      }
      if (checkReverseHash(req.body)) {
        // res.status(201).json(createdPayment)
        // res.send(req.body);
        res.redirect("http://localhost:3000/consultation")
      }
      else {
        res.send('false, check the hash value ');
      }
    }
    else {
      res.status(400)
    }
  }
  else {
    res.status(400)
  }

})

//refund API
const refundPay = asyncHandler(async (req, res) => {
  const data = req.body;
  // console.log("data", data)
  refund(data, config, res);
  // console.log("ressfund", res)
  res.status(200);
})

//refund API Response
const refundPayment = asyncHandler(async (req, res) => {
  const {
    key,
    txnid,
    refund_amount,
    status,
    hash,
    phone,
    email,
    amount,
  } = req.body

  const refundData = new Refund({
    key,
    txnid,
    refund_amount,
    status,
    hash,
    phone,
    email,
    amount
  })

  //condition to check the refund status
  if (refundData.status === true) {
    const consultant = await Consultant.findById(req.params.id)
    // console.log("Consultant is", consultant)
    if (consultant) {
      // console.log("first")
      // console.log(req.body)
      const ConsultantUpdateData = await consultant.save()
      transporter.sendMail({
        to: consultant.patientEmail_address,
        from: "info@mindvein.com",
        subject: "Your Refund Amount is Paid to your account.",
        html: "<h1>Payment Done Successfully!</h1>"
      })
      // console.log("ConsultantUpdate", ConsultantUpdateData)

      const refundPayment = await refundData.save();

      function checkReverseHash(response) {
        //"key|txnid|amount|refund_amount|email|phone";
        var hashstring = config.key + "|" + response.txnid + "|" + response.amount + "|" + response.refund_amount + "|" + response.merchant_email + "|" + response.phone + "|" + config.salt;
         let hash_key = sha512.sha512(hashstring);
        if (hash_key == req.body.hash)
          return true;
        else
          return false;
      }
      if (checkReverseHash(req.body)) {
        res.status(201).json(refundPayment)
        res.send(req.body);
        // res.redirect("http://localhost:3000/consultation")
      }
      else {
        res.send('false, check the hash value ');
      }
    }
    else {
      res.status(400)
    }
  }
  else {
    res.status(400)
  }

})


export { addEasebuzz, initiatePayment, paymentResponse, refundPayment,refundPay }