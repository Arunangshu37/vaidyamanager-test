import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const dietchartSchema = mongoose.Schema(
    {
        pateientDietChart : [
            { 
                diet : {
                    diet_id: String,
                    Name:String,
                    Category : String
                },
                Permit:String
            },        
        ],
        wtodo: {
            type: String
        },
        wto_dont: {
            type: String
        },
    },

    {
        timestamps: true,
    }
)

const DietChart = mongoose.model('DietChart', dietchartSchema)

export default DietChart
