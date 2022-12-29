import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const prescriptionSchema = mongoose.Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        Dos: [String],
        Donts:[String],
        Occasional:[String],
        all:[String],
        todo:{
            type:String
        },
        to_dont:{
            type:String
        },
    },
   
    {
        timestamps: true,
    }
)

const Prescription = mongoose.model('Prescription', prescriptionSchema)

export default Prescription
