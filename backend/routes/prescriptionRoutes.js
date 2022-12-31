import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { addDietChartDetails } from '../controllers/prescriptionController.js'

const router = express.Router()


router.route('/add_dietchart').post(addDietChartDetails)

export default router