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


export {addDietChartDetails }