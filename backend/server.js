import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import userRoutes from './routes/userRoutes.js'
import videoRoutes from './routes/videoRoutes.js'
// import authRoutes from './routes/authRoutes.js'
import therapyRoutes from './routes/therapyRoutes.js'
import inquiryRoutes from './routes/inquiryRoutes.js'
import prescriptionRoutes from './routes/prescriptionRoutes.js'
import dashboardRoutes from './routes/dashboardRoutes.js'
import doctorRoutes from './routes/doctorRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import fs from 'fs';
import { fileURLToPath } from 'url';
import cors from 'cors';
import path from 'path';
import multer from 'multer'
import mutexify from 'mutexify';
// Initialize config file
dotenv.config()
// Establish connection with MongoDB database.
connectDB()
const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Body parser to accept JSON data
app.use(express.json({limit: '100mb'}))
app.use(cors())

// Error handling middleware
// app.use(notFound)
// app.use(errorHandler)
// User routes
app.use('/api/users', userRoutes)
// doctors route
app.use('/api/doctors', doctorRoutes)
// Vidoe routes
app.get('/api/video', (req, res) => {
    res.sendFile('assets/video1.mp4', { root: __dirname });
});
app.use("/api/videos", videoRoutes);
//Patient Therapy
app.use('/api/therapy', therapyRoutes);
//Patient Inquiry
app.use('/api/inquiry', inquiryRoutes);
//Prescription Routes
app.use('/api/prescription',prescriptionRoutes)
//dashboard Routes
app.use('/api/dashboard', dashboardRoutes)
//Otp routes
// app.use("/api/auth", authRoutes);

const mutex = mutexify();

var upload = multer();
app.use(upload.array()); 
app.use(express.urlencoded({ limit: '100000000',extended: true, parameterLimit:50000 })); 



const PORT = process.env.PORT || 8000

app.use(express.static('../frontend/build'));
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get("/*", (req, resp)=>{
    resp.sendFile(path.resolve("../frontend", "build", "index.html"));
})
app.listen(PORT, () => {
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green
            .bold
    )
})
