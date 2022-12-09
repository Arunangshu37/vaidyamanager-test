import { roundToNearestMinutes } from 'date-fns'
import express from 'express'

import {addConsultants,
        getConsulatants,
        updateConsultants,
        updateConsultationLink,
        cancelAppointment,
        getFilterConsultants,
        updateConsultantPrescription
} from '../controllers/consultantController.js'
import { protect } from '../middleware/authMiddleware.js'


const router = express.Router()
// Get all Method


router.route('/').post(addConsultants)
router.route('/myconsultants').get(getConsulatants)
// router.route('/:id').get(getConsultantById)
router.route('/:id/updateconsultant').put(updateConsultants)
router.route('/:id/link').put(updateConsultationLink)
router.route('/:id/delete').delete(cancelAppointment)
router.route('/filterdata').get(getFilterConsultants)
router.route('/:id/prescription').put(updateConsultantPrescription)



export default router