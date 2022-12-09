import { NumberFilter } from 'ag-grid-community'
import mongoose from 'mongoose'

const initiate_paymentSchema = mongoose.Schema(
    {
        name_on_card: {
            type: String,
        },
        bank_ref_num: {
            type: String,
         },
        udf3: {
            type: String,
        },
        hash: {
            type: String, 
            required: true,
        },
        firstname: {
            type: String, 
            required: true,
        },
        net_amount_debit: {
            type:Number, 
        },
        payment_source: {
            type:String, 
        },
        surl: {
            type:String, 
            required: true,
        },
        error_Message: {
            type:String,   
        },
        issuing_bank: {
            type:String,     
        },
        cardCategory: {
            type:String, 
        },
        phone: {
            type:String, 
            required: true,
        },
        easepayid: {
            type:String, 
        },
        cardnum: {
            type:String, 
        },
        key: {
            type:String, 
            required: true,
        },
        udf8: {
            type:String, 
        },
        unmappedstatus: {
            type:String, 
        },
        PG_TYPE: {
            type:String, 
        },
        addedon: {
            type:Date, 
        },
        cash_back_percentage: {
            type:Number, 
        },
        status: {
            type:String, 
        },
        udf1: {
            type:String, 
        },
        merchant_logo: {
            type:String, 
        },
        udf6: {
            type:String, 
        },
        udf10: {
            type:String, 
        },
        txnid: {
            type:String,
            required: true,
        },
        productinfo: {
            type:String,
        },
        furl: {
            type:String,
            required: true,
        },
        card_type: {
            type:String,
        },
        amount: {
            type:Number,
        },
        udf2: {
            type:String,
        },
        udf5: {
            type:String,
        },
        mode: {
            type:String,
        },
        udf7: {
            type:String,
        },
        error: {
            type:String,
        },
        udf9: {
            type:String,
        },
        bankcode: {
            type:String,
        },
        deduction_percentage: {
            type:Number,
        },
        email: {
            type:String,
            required: true,
        },
        udf4: {
            type:String,
        },
    },
    {
        timestamps: true,
    }
)

const Initiate_Payment = mongoose.model('Initiate_Payment', initiate_paymentSchema)

export default Initiate_Payment
