
import asyncHandler from 'express-async-handler'
import Doctor from '../models/doctorsModel.js'
import mongoose from 'mongoose'


const addDoctors = asyncHandler(async (req, res) => {

    const {
        name,
        qualification,
        experience,
        email_id,
        phone_no,
        consultation_fee,
        profilePictureURL

    } = req.body


    const doctor = new Doctor({
        name,
        qualification,
        experience,
        email_id,
        phone_no,
        consultation_fee,
        profilePictureURL

    })

    const createdDoctor = await doctor.save()

    res.status(201).json(createdDoctor)

})


// get doctors
const getDoc = asyncHandler(async (req, res) => {
    //  Get all the doctors from MongoDB

    // res.json("worked")
    const doctors = await Doctor.find({});
    res.json(doctors)
})

// add the consultant dates into db
const updateDoctor = asyncHandler(async (req, res) => {
    // Get data from DB
    const doctor = await Doctor.findById(req.params.id)
    // const date = doctor.consultant_date.find((a) => a._id === req.params.dateid)
    if (doctor) {
        doctor.name = req.body.name
        doctor.qualification = req.body.qualification
        doctor.experience = req.body.experience
        doctor.consultant_date = req.body.consultant_date
        // doctor.consultant_date1 = req.body.consultant_date1
        doctor.email_id = req.body.email_id
        doctor.phone_no = req.body.phone_no

        const updateDoctors = await doctor.save()

        // Send back updated doctors
        res.json(updateDoctors)
    } else {
        res.status(404)
        throw new Error('Could not update doctor')
    }
})


//update the consultant_date of doctor
const updateAppointmentDate = asyncHandler(async (req, res) => {

    var userid = mongoose.Types.ObjectId(req.params.id)
    var dateId = mongoose.Types.ObjectId(req.params.dateid)
    const doctor = await Doctor.updateOne(
        { _id: userid, "consultant_date._id": dateId },
        {
            $set: {
                "consultant_date.$.from": req.body.from,
                "consultant_date.$.to": req.body.to,
            }
        }
    )

    if (doctor) {
        // Send back updated doctors
        const updatedoctor = await Doctor.findById(req.params.id)
        // const updateDoctors = await doctor.save()
        res.json(updatedoctor)
    } else {
        res.status(404)
        throw new Error('Could not update doctor')
    }

})


//delete the appointment from doctor side
const cancelAppointmentDoctor = asyncHandler(async (req, res) => {

    // const doctors = await Doctor.findById(req.params.id)

    var userId = mongoose.Types.ObjectId(req.params.id)
    // console.log("user id", userId)
    var deleteId = mongoose.Types.ObjectId(req.params.deleteid)
    // console.log("delete id", deleteId)
    // console.log("cancel appointment")
    const cancelDate = await Doctor.updateOne(
        { _id: userId },
        {
            $pull: {
                "consultant_date": {
                    //  "consultant_date._id": deleteId,
                    "_id": deleteId,
                }
            }
        },
        { multi: true }

    )

    if (cancelDate) {
        const deleteConsultantDate = await Doctor.findById(req.params.id)
        res.json(deleteConsultantDate);
    }
    else {
        res.status(404)
        throw new Error('Could not found consultant')
    }
})


export { getDoc, addDoctors, updateDoctor, updateAppointmentDate, cancelAppointmentDoctor }