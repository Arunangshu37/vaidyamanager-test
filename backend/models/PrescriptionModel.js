import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const prescriptionSchema = mongoose.Schema(
    {
        prescriptionUser: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        diet_chart: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'DietChart'
        },
        Symptoms_name: String,
        medicines: [{
            medicine_name: {
                type: String,
                
            },
            dose: {
                type: String,
                
            },
            qty: {
                type: Number,  
            },
        
        }],
        days: {
            type: String,
        },
        ayurveda_diagnosis: {
            type: String
        },
        modernSystem: {
            type: String
        },
        mDiagnosis: {
            type: String
        },
        prescriptionTreatment:{
            type:String
        },
        ayurveda: {
            type: String
        },

        panchkarma: [{
            panchkarma_name: String,
            panchkarma_days: String

        }],
        Image: {
            type: String
        },
        Video: {
            type: String
        },
        report: {
            type: String
        },
        Payment: {
            Consulting: Number,
            Medicine: Number,
            Paid: Number,
            Debit_Credit: Number,
            Discount:Number,
            // Mode: String
        },

    },
    {
        timestamps: true,
    }
)

const Prescription = mongoose.model('Prescription', prescriptionSchema)

export default Prescription
