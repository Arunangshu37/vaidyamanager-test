import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const prescriptionSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        diet_chart: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Dietchart'
        },
        Symptoms_name: [String],
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
        Payement: {
            Consulting: String,
            Medicine: String,
            Paid: String,
            Debit_Credit: String,
            Mode: String
        },

    },
    {
        timestamps: true,
    }
)

const Prescription = mongoose.model('Prescription', prescriptionSchema)

export default Prescription
