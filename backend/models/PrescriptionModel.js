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
        Symptoms: [{
            Symptoms_name:String
        }],
        medicineData: [{
            dose: String,
            medicineDetails: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Medicine'
            }
        }],
        prescriptiondays: {
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
        prescriptionTreatment: {
            type: String
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
            Consulting: String,
            Medicine: String,
            Paid: Number,
            Debit_Credit: Number,
            Discount: String,
            // Mode: String
        },

    },
    {
        timestamps: true,
    }
)

const Prescription = mongoose.model('Prescription', prescriptionSchema)

export default Prescription
