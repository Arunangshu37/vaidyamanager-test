import Prescription from '../models/PrescriptionModel.js'
import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'
import DietChart from '../models/DietchartModel.js';
import crypto from 'crypto';

const addDietChartDetails = asyncHandler(async(req,res)=>{
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
    console.log("success  createdDietchart");
    res.status(201).json(createdDietchart)

})

const addPrescriptionDetails = asyncHandler(async(req,res)=>{
    const {
        prescriptionUser,
        diet_chart,
        Symptoms_name,
        medicines,
        days,
        ayurveda_diagnosis,
        modernSystem,
        mDiagnosis,
        prescriptionTreatment,
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
        Symptoms_name,
        medicines,
        days,
        ayurveda_diagnosis,
        modernSystem,
        mDiagnosis,
        prescriptionTreatment,
        ayurveda,
        panchkarma,
        Image,
        Video,
        report,
        Payment
        
    })
    const createdPrescription = await PrescripionData.save();
    console.log("success  Prescription");
    res.status(201).json(createdPrescription)

})


export {addDietChartDetails,addPrescriptionDetails}