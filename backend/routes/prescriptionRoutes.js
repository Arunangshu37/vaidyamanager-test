import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { addDietChartDetails,addPrescriptionDetails} from '../controllers/prescriptionController.js'

const router = express.Router()


router.route('/add_dietchart').post(addDietChartDetails)
router.route('/add_prescription').post(addPrescriptionDetails)



export default router