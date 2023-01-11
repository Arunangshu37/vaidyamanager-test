import Prescription from '../models/PrescriptionModel.js'
import Medicine from '../models/medicineModel.js'
import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'
import DietChart from '../models/DietchartModel.js';
import crypto from 'crypto';


//add diet chart details
const addDietChartDetails = asyncHandler(async (req, res) => {
    const {
        pateientDietChart,
        wtodo,
        wto_dont
    } = req.body

    const DietChartData = new DietChart({
        pateientDietChart,
        wtodo,
        wto_dont
    })
    const createdDietchart = await DietChartData.save();
    res.status(201).json(createdDietchart)

})

//add prescription
const addPrescriptionDetails = asyncHandler(async (req, res) => {
    const {
        prescriptionUser,
        diet_chart,
        Symptoms,
        medicineData,
        prescriptiondays,
        ayurveda_diagnosis,
        modernSystem,
        mDiagnosis,
        prescriptionTreatment,
        treatmentdays,
        ayurveda,
        panchkarma,
        Image,
        Video,
        report,
        Payment

    } = req.body

    const PrescripionData = new Prescription({
        prescriptionUser,
        diet_chart,
        Symptoms,
        medicineData,
        prescriptiondays,
        ayurveda_diagnosis,
        modernSystem,
        mDiagnosis,
        prescriptionTreatment,
        treatmentdays,
        ayurveda,
        panchkarma,
        Image,
        Video,
        report,
        Payment

    })
    const createdPrescription = await PrescripionData.save();
    res.status(201).json(createdPrescription)

})

//add medicines
const addMedicineDetails = asyncHandler(async (req, res) => {
    const {
        medicineName,
        Qty,
        Unit,
        Gram,
        supplierName,
        contactNo,
        amount,
        medicine_reciver_name,
    } = req.body

    const MedicineData = new Medicine({
        medicineName,
        Qty,
        Unit,
        Gram,
        supplierName,
        contactNo,
        amount,
        medicine_reciver_name,

    })
    const createdMedicine = await MedicineData.save();
    res.status(201).json(createdMedicine)

})

//get all medicines
const getAllMedicines = asyncHandler(async (req, res) => {
    const allmedicines = await Medicine.find({})
    res.json(allmedicines)
})

//get all prescription
const getAllPrescriptions = asyncHandler(async (req, res) => {
    const allprescriptions = await Prescription.find({})
    res.json(allprescriptions)
})



export {
    addDietChartDetails, addPrescriptionDetails, addMedicineDetails,
    getAllMedicines, getAllPrescriptions
}