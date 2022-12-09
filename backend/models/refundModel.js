import mongoose from 'mongoose'

const refundSchema = mongoose.Schema(
    {

        txnid: {
            type: mongoose.Schema.Types.ObjectId,
            // required: true,
            ref: 'Initiate_Payment',
        },
        key: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
        },
        refund_amount: {
            type: Number,
        },
        status:
        {
            type: Boolean,
        },
        hash_key: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },


    },
    {
        timestamps: true,
    }
)

const Refund = mongoose.model('Refund', refundSchema)

export default Refund
