import Order from "../models/orderModel.js"
import asyncHandler from "express-async-handler";

// @desc Create new Order
// @route POST /api/orders
// @access Private

const addOrderItems = async (req,res) => {
    console.log("addOrderItems entered!")
    try{
       const {orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice,
    totalPrice} = req.body;

        if (orderItems && orderItems.length === 0){
            res.status(400).send("No order items");
        }else{
            // we take the user._id from the token from the orderModel
            const order = new Order({
                orderItems, user: req.user._id, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice,
                totalPrice, 
            })

            const createdOrder = await order.save();

            res.status(201).json(createdOrder);
        }

    }catch(error){
        console.log("there was an error adding the order to the db")
    }
}




// @desc get order by ID
// @route GET /api/orders/:id
// @access Private

const getOrderById = async (req,res) => {
    console.log('get order by id entered!');
    try{
        // we populate from 'user' and grab name & email!
        const order = await Order.findById(req.params.id).populate("user", "name email");
        console.log(order);
        if (order){
            res.json(order)
        }else{
            res.status(404).send('Order could not be found')
        }
    }
    catch(error){
        console.log("there was an error finding the order from the db")
    }
}



// @desc Update Order to paid
// @route GET /api/orders/:id/pay
// @access Private

const updateOrderToPaid = async (req,res) => {
    try{
        // we populate from 'user' and grab name & email!
        const order = await Order.findById(req.params.id);
      
        if (order){
            order.isPaid = true; 
            order.paidAt = Date.now();
            // thats from paypal
            order.paymentResult = {
                id: req.body.id, 
                status: req.body.status,
                update_time: req.body.update_time,
                email_address: req.body.payer.email_address
            }

            const updatedOrder = await order.save();

            res.json(updatedOrder);

        }else{
            res.status(404).send('Order could not be paid')
        }
    }
    catch(error){
        console.log("there was an error paying the order")
    }
}





// @desc Get Logged-In User Orders
// @route GET /api/orders/myorders
// @access Private

const getMyOrders = async (req,res) => {
    console.log("will it get my Orders?")
    try{
        // we populate from 'user' and grab name & email!
        const orders = await Order.find({user: req.user._id});
        res.json(orders)
    }
    catch(error){
        console.log("there was an error getting the orders")
    }
}

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
const getOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({}).populate('user', 'id name')
    res.json(orders)
  })




// @desc    Update order to delivered
// @route   GET /api/orders/:id/deliver
// @access  Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)
  
    if (order) {
      order.isDelivered = true
      order.deliveredAt = Date.now()
  
      const updatedOrder = await order.save()
  
      res.json(updatedOrder)
    } else {
      res.status(404)
      throw new Error('Order not found')
    }
  })


  export  {addOrderItems, getOrderById, updateOrderToPaid, getMyOrders, getOrders, updateOrderToDelivered};
