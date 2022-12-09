import mongoose from 'mongoose'

/**
 * Method that connects our MongoDB database.
 */
const connectDB = async () => {
try {
        // const atlasURI =`mongodb+srv://User:OEIAgxSAYPOH5d5u@cluster0.lhx2giy.mongodb.net/test`;
        // const atlasURI = `mongodb+srv://root:root@cluster0.9xex1.mongodb.net/etestdb?retryWrites=true&w=majority`;
        // const atlasURI = `mongodb+srv://root:root@cluster0.9xex1.mongodb.net/mindvein?retryWrites=true&w=majority`;
        const atlasURI = `mongodb+srv://root:root@cluster1.8utxkxi.mongodb.net/vaidya_manager?retryWrites=true&w=majority`;
        const conn = await mongoose.connect(atlasURI, {
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
