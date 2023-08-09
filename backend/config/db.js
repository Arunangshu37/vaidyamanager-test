import mongoose from 'mongoose';
import dotenv from 'dotenv'

const connectDB = async () => {
try {
    dotenv.config()
    // console.log('Env loaded:', process.env.DATABASE);
        // const DB = process.env.DATABASE;
        // console.log('DB:', DB);
        // const atlasURI =`mongodb://localhost:27017/vaidya_manager`
        const conn = await mongoose.connect(process.env.DATABASE, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

export default connectDB
