import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import videoRoutes from './routes/videoRoutes.js'
import easebuzzRoutes from './routes/easebuzzRoutes.js'
// import authRoutes from './routes/authRoutes.js'
import therapyRoutes from './routes/therapyRoutes.js'
import inquiryRoutes from './routes/inquiryRoutes.js'

// consultant  & doctor route
import consultantsRoutes from './routes/consultantsRoutes.js'
import doctorRoutes from './routes/doctorRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import fs from 'fs';
import cors from 'cors';
import path from 'path';
import multer from 'multer'
// Initialize config file
dotenv.config()

// Establish connection with MongoDB database.
connectDB()


const app = express();


// Body parser to accept JSON data
app.use(express.json({limit: '100mb'}))

app.use(cors())

app.get('/', (req, res) => {
    res.send('API is running')
})



// Product routes
app.use('/api/products', productRoutes)
// User routes
app.use('/api/users', userRoutes)
// Order routes
app.use('/api/orders', orderRoutes)

// consulatant route
app.use('/api/consultants', consultantsRoutes)
// doctors route
app.use('/api/doctors', doctorRoutes)
// Vidoe routes
app.get('/api/video', (req, res) => {
    res.sendFile('assets/video1.mp4', { root: __dirname });
});
app.use("/api/videos", videoRoutes);

app.use('/api/therapy', therapyRoutes);
app.use('/api/inquiry', inquiryRoutes);



var upload = multer();
app.use(upload.array()); 
app.use(express.urlencoded({ limit: '100000000',extended: true, parameterLimit:50000 })); 
// console.log('Limit file size: '+limit)
app.use('/api/easebuzz', easebuzzRoutes);



//mindvein-login  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

//Otp routes
// app.use("/api/auth", authRoutes);

// Paypal routes
app.use('/api/config/paypal', (req, res) =>
    res.send("access_token$sandbox$7wzbqbh9qn9nrmd6$8d14dc09cfb9b5bb37a8c11548fddf3d")
)


// Error handling middleware
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green
            .bold
    )
})
