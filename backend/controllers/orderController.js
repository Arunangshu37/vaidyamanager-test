import Order from '../models/orderModel.js'
import asyncHandler from 'express-async-handler' // Middleware to handle exceptions inside async express routes

// @desc Create a new order
// @route GET /api/orders
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
   
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body

    // Make sure order is not empty
    if (orderItems && orderItems.length === 0) {
        res.status(400) // Bad request
        throw new Error('No order items')
        return
    } else {
       
        const order = new Order({
            orderItems,
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        })
     

        const createdOrder = await order.save()

        res.status(201).json(createdOrder)
    }
})

// @desc Get an order by the id
// @route GET /api/orders/:id
// @access Private
const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate(
        'user',
        'name email'
    )

    // if order exists else throw error
    if (order) {
        res.json(order)
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})

// @desc Update order to paid
// @route PUT /api/orders/:id/pay
// @access Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
    // Get order from DB
    const order = await Order.findById(req.params.id)

    // if order exists update the fields else throw error
    if (order) {
        order.isPaid = true,
        order.paidAt = Date.now(),
        order.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_address: req.body.payer.email_address,
        }
        // Save the updated order in the DB
        const updatedOrder = await order.save()

        // Send back updated order
        res.json(updatedOrder)
    } else {
        res.status(404)
        throw new Error('Could not update order')
    }
})

// @desc Get logged in user orders
// @route PUT /api/orders/myorders
// @access Private
const getUserOrders = asyncHandler(async (req, res) => {
    // Get orders from DB
    const orders = await Order.find({ user: req.user._id })
    
    res.json(orders)
})

const getAllOrders = asyncHandler(async (req, res) => {
    //     // Get orders from DB
        const allorders = await Order.find()
      
        res.json(allorders)
      
    })



//update api
const updateOrderStatus = asyncHandler(async (req, res) => {
    // Get order from DB
    const order = await Order.findById(req.params.id)
 
    // if order exists update the fields else throw error
    if (order) {
    // if(order._id == req.params.id){
    //     let temp=[];
    //     order.orderItems.forEach(element => {
    //         if(element.product == req.body.productId){
    //     let tempObj=    {
    //         name: element.name,
    //         qty: element.qty,
    //         image: element.image,
    //         price: element.price,
    //         product:element.product,
    //         isType:element.isType,
    //         validity:element.validity,
    //         activationDate:element.activationDate,
    //         expiryDate:element.expiryDate,
    //         planStatus: req.body.planStatus ||  element.planStatus   
    //         }
    //         temp.push(tempObj)
    //     }
    //     });
    // }
        order.orderItems = req.body.orderItems || order.orderItems,
        order.shippingAddress = req.body.shippingAddress || order.shippingAddress,
        order.paymentMethod = req.body.paymentMethod || order.paymentMethod,
        order.paymentResult = req.body.paymentResult || order.paymentResult,
        order.taxPrice = req.body.taxPrice || order.taxPrice,
        order.shippingPrice = req.body.shippingPrice || order.shippingPrice,
        order.totalPrice = req.body.totalPrice || order.totalPrice,
        order.isPaid = req.body.isPaid || order.isPaid,
        order.paidAt = req.body.paidAt || order.paidAt,
        order.isDelivered = req.isDelivered || order.isDelivered,
        order.deliveredAt = req.deliveredAt || order.deliveredAt,
        order.status = req.body.status || order.status,
        order.isDispatched = req.body.isDispatched || order.isDispatched
        
        // Save the updated order in the DB
        const updatedOrder = await order.save()
      
        // Send back updated order
        res.json({
            _id: updatedOrder._id,
            orderItems: updatedOrder.orderItems,
            shippingAddress: updatedOrder.shippingAddress,
            paymentMethod:updatedOrder.paymentMethod,
            paymentResult:updatedOrder.paymentResult,
            taxPrice:updatedOrder.taxPrice,
            shippingPrice:updatedOrder.shippingPrice,
            totalPrice:updatedOrder.totalPrice,
            isPaid:updatedOrder.isPaid,
            paidAt:updatedOrder.paidAt,
            isDelivered:updatedOrder.isDelivered,
            deliveredAt:updatedOrder.deliveredAt,
            status:updatedOrder.status,
            isDispatched:updatedOrder.isDispatched

        })
    } else {
        res.status(404)
        throw new Error('Could not update order')
    }
})




export { addOrderItems, getOrderById, updateOrderToPaid,updateOrderStatus,getAllOrders,getUserOrders }
