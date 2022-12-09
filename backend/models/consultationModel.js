import mongoose from 'mongoose'

const consultantSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        name: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        appointment_date: {
            type: String,

        },
        confirmed_date: {
            type: String,

        },
        appointment_status: {
            type: String,

        },
        payment_details: {
            type: String,
            // required:true,
            // id: {
            //     type: String,
            // },
            // name: {
            //     type: String,
            // },
            // update_time: {
            //     type: String,
            // },
            // email_address: {
            //     type: String,
            // },


        },
        prescriptionSource: {
            type: String
        },
        payment_status: {
            type: String
        },
        patientEmail_address: {
            type: String
        },
        patientName: {
            type: String
        },
        consultationLink: {
            type: String
        },
        patientWeight: {
            type: String
        },
        patientHeight: {
            type: String
        },
        Observation: {
            type: String
        },
        actual_patientName: {
            type: String,
        },
        doc_fee:
        {
            type: String,
        }
    },
    {
        timestamps: true,
    }
)

const Consultant = mongoose.model('Consultations', consultantSchema)



export default Consultant
