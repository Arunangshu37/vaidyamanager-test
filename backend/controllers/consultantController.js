import Consultant from '../models/consultationModel.js'
import Doctor from '../models/doctorsModel.js'
import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'
import nodemailer from 'nodemailer'
import sendgridTransport from 'nodemailer-sendgrid-transport'
import crypto from 'crypto';

const transporter = nodemailer.createTransport(sendgridTransport({
    // auth object
    //sendgrid api of mayurichavan842@gmail.com
    // auth:{
    //     api_key:'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'
    // }

    //sendgrid api of info@mindvein.com
    auth: {
        api_key: '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'
    }

}))


// add consultant 
const addConsultants = asyncHandler(async (req, res) => {

    const {
        name,
        date,
        appointment_date,
        confirmed_date,
        appointment_status,
        payment_details,
        payment_status,
        prescriptionSource,
        patientEmail_address,
        patientName,
        consultationLink,
        patientWeight,
        patientHeight,
        Observation,
        actual_patientName,
        doc_fee

    } = req.body

    const consultantData = new Consultant({
        // _id: req.params.id,
        name,
        date,
        appointment_date,
        confirmed_date,
        appointment_status,
        payment_details,
        payment_status,
        prescriptionSource,
        patientEmail_address,
        patientName,
        consultationLink,
        patientWeight,
        patientHeight,
        Observation,
        actual_patientName,
        doc_fee
        // user: req.user._id,

    })
    const createdConsultant = await consultantData.save();
    transporter.sendMail({
        to: createdConsultant.patientEmail_address,
        from: "info@mindvein.com",
        subject: "Your appointment is Booked",
        html: "<h1>Welcome to Mindvein</h1>"
    })
    console.log("success Mail");
    //find the doctor
    const doctor = await Doctor.findOne({ name: name })
    if (doctor) {
        console.log("Doctor Mail Send successfully")
        transporter.sendMail({
            to: doctor.email_id,
            from: "info@mindvein.com",
            subject: "Your appointment is Booked By a Patient",
            html: "<h1>Welcome to Mindvein, Please Check</h1>"
        })
    }
    res.status(201).json(createdConsultant)
})

// get consultants
const getConsulatants = asyncHandler(async (req, res) => {
    //  Get all the consulatant data from MongoDB

    // res.json("worked"
    const consultants = await Consultant.find();
    // console.log("Consultant Data", consultants)

    res.json(consultants)
})


// update
const updateConsultants = asyncHandler(async (req, res) => {
    //  Get consultant from DB
    const consultant = await Consultant.findById(req.params.id)
    if (consultant) {
        consultant.name = req.body.name,
            consultant.date = req.body.date,
            consultant.appointment_status = req.body.appointment_status,
            consultant.confirmed_date = Date.now()
        consultant.appointment_date = Date.now()
        consultant.payment_details = req.body.payment_details
        consultant.prescriptionSource = req.body.prescriptionSource
        consultant.patientEmail_address = req.body.patientEmail_address
        consultant.payment_status = req.body.payment_status
        consultant.patientName = req.body.patientName
        consultant.patientWeight = req.body.patientWeight
        consultant.patientHeight = req.body.patientHeight
        consultant.Observation = req.body.Observation
        consultant.actual_patientName = req.body.actual_patientName,
            consultant.doc_fee = req.body.doc_fee

        const updatedConsultant = await consultant.save()

        res.json(updatedConsultant)
    } else {
        res.status(404)
        throw new Error('Could not update consultant')
    }
})


// const getConsultantById = asyncHandler(async (req, res) => {

//     const consultant = await Consultant.findById(mongoose.Types.ObjectId(req.params.id)).populate(
//         // const consultant = await Consultant.findById(req.params.id).populate(
//         'user',
//         // 'date',
//         // 'appointment_date',
//         // 'confirmed_date',
//         // 'appointment_status',
//         // 'payment_details',
//         // 'payment_status',
//         // 'prescriptionSource',
//         // 'email_address',
//         // 'patientName',

//     )

//     // if order exists else throw error
//     if (consultant) {
//         res.json(consultant)
//     } else {
//         res.status(404)
//         throw new Error('Consultants  not found')
//     }
// })

// update consultation link
const updateConsultationLink = asyncHandler(async (req, res) => {
    //  Get consultant from DB

    const consultant = await Consultant.findById(req.params.id)
    if (consultant) {
        consultant.consultationLink = req.body.consultationLink

        //  Save the updated order in the DB
        const updatedConsultants = await consultant.save()

        //  Send back updated order
        res.json(updatedConsultants)
    } else {
        res.status(404)
        throw new Error('Could not update consultant')
    }
})

const cancelAppointment = asyncHandler(async (req, res) => {
    //  Get consultant from DB
    const consultants = await Consultant.findById(req.params.id)
    // console.log(consultants)
    const doctor = await Doctor.findOne({ name: consultants.name })

  const patientEmail = consultants.patientEmail_address;
//   console.log("patientEmail",patientEmail)
    const result = await consultants.deleteOne({ _id: 'ObjectId("' + req.params.id + '")' })

    if (result) {
        if (doctor) {
            console.log("Doctor Mail Send successfully")
            transporter.sendMail({
                to: doctor.email_id,
                from: "info@mindvein.com",
                subject: "Your appointment is being Cancelled  by a Patient",
                html: "<h1>Please Check the Website</h1>"
            })
        }

        transporter.sendMail({
            to:patientEmail,
            from: "info@mindvein.com",
            subject: "Your appointment is Cancelled",
            html: "<h1>Thank you</h1>"
        })

        res.json(result);
    }
    else {
        res.status(404)
        throw new Error('Could not found consultant')
    }
})


const getFilterConsultants = asyncHandler(async (req, res) => {

    // const { userInfo } = userLogin
    // console.log("user info",userInfo)
    const users = await User.find({}).select('email');
    // console.log(users)
    const doctorData = await Doctor.find({}).select('email_id');
    // const doctorData =  await Doctor.find((doctor) => doctor?.email_id === users)
    // console.log("Doctor Data", doctorData);
    // const consultantAppointments = await Consultant.findById('name');
    // const filterConsultant = consultantAppointments?.filter((con)=> con.name === doctorData.name);
    // console.log("filterConsultant",filterConsultant) 


    res.json(users)

})

const updateConsultantPrescription = asyncHandler(async (req, res) => {
    //  Get consultant from DB
    const consultants = await Consultant.findById(req.params.id)
    // console.log("First Update")
    if (consultants) {
        // console.log("Second Update")
        consultants.name = req.body.name
        consultants.date = req.body.date
        consultants.prescriptionSource = req.body.prescriptionSource
        consultants.patientName = req.body.patientName
        consultants.patientWeight = req.body.patientWeight
        consultants.patientHeight = req.body.patientHeight
        consultants.Observation = req.body.Observation
        consultants.actual_patientName = req.body.actual_patientName

        const updatedConsultant = await consultants.save()

        //  Send back updated consultant data
        res.json(updatedConsultant)
        // console.log("Third update")
    } else {
        res.status(404)
        throw new Error('Could not update consultant')
    }
})


export { getConsulatants, addConsultants, updateConsultants, updateConsultationLink, cancelAppointment, getFilterConsultants, updateConsultantPrescription }