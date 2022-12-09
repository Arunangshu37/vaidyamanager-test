import mongoose from 'mongoose'

const easebuzzSchema = mongoose.Schema(
    {
        taxPrice: {
            type: Number,
            required: true,
            default: 0.0,
        },
        shippingPrice: {
            type: Number,
            required: true,
            default: 0.0,
        },
        totalPrice: {
            type: Number,
            required: true,
            default: 0.0,
        },
        isPaid: {
            type: Boolean,
            required: true,
            default: false,
        },
        isDelivered: {
            type: Boolean,
            required: true,
            default: false,
        },
        orderItems: [{
            name: {
                type: String,
                required: true,
            },
            qty: {
                type: Number,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product',
            },
          
        }],
        user: {
            type: mongoose.Schema.Types.ObjectId,
            // required: true,
            ref: 'User',
        },
        shippingAddress: {
            address: {
                type: String,
                required: false,
            },
            city: {
                type: String,
                required: false,
            },
            postalCode: {
                type: String,
                required: false,
            },
            country: {
                type: String,
                required: false,
            },
        },
        paidAt: {
            type: Date,
        },
        paymentMethod: {
            type: String,
            required: false,
        },
        paymentResult: {
            id: {
                type: String,
            },
            status: {
                type: String,
            },
            update_time: {
                type: String,
            },
            email_address: {
                type: String,
            },
        },
        deliveredAt: {
            type: Date,
        },
        status: {
            type: String
        },
        isDispatched: {
            type: Boolean,
            // required: true,
            default: false,
        },
       
    },
    {
        timestamps: true,
    }
)

const Easebuzz = mongoose.model('Easebuzz', easebuzzSchema)

export default Easebuzz
