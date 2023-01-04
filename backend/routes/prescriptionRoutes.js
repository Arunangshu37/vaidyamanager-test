import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { addDietChartDetails,addPrescriptionDetails,addMedicineDetails,getAllMedicines} from '../controllers/prescriptionController.js'

const router = express.Router()


router.route('/add_dietchart').post(addDietChartDetails)
router.route('/add_prescription').post(addPrescriptionDetails)
router.route('/add_medicines').post(addMedicineDetails)
router.route('/get_medicines').get(getAllMedicines)

export default router