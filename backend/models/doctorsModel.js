import mongoose from 'mongoose'

const doctorSchema = mongoose.Schema(
    {
        // _id: mongoose.Schema.ObjectId,
        name: {
            type: String,
            required: true,
        },
        qualification: {
            type: String,
            required: true,
        },
        experience: {
            type: String,

        },
        // consultant_date1: [{
        //     from: String,
        //     to: String,
        // }],
        consultant_date: [{
            // _id: mongoose.Schema.ObjectId,
            from: String,
            to: String,
        }],
        email_id: {
            type: String,
            required: true,
        },
        phone_no: {
            type: String,
            required: true,
        },
        consultation_fee:{
            type: String,
        },
        profilePictureURL: {
            type: String
        },

    },
    {
        timestamps: true,
    }
)

const Doctor = mongoose.model('Doctors', doctorSchema)



export default Doctor
