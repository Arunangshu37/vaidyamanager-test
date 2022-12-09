import express from 'express'
import {
    addEasebuzz,initiatePayment,paymentResponse,refundPayment,refundPay
} from '../controllers/easebuzzController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/payment').post(protect,addEasebuzz)
router.route('/initiate_payment').post(protect,initiatePayment)
router.route('/easebuzz_reponse/:id').post(paymentResponse)
router.route('/refund').post(protect,refundPay)
router.route('/easebuzz_reponse/refund/:id').post(refundPayment)


export default router
