import express from "express";
const router = express.Router();

import {addOrderItems, getOrderById, updateOrderToPaid, getMyOrders,getOrders, updateOrderToDelivered} from "../controllers/orderController.js";
import {protect,admin} from "../middleware/authMiddleware.js";

router.post("/", protect, addOrderItems);

router.get("/myorders", protect, getMyOrders);

router.get("/:id",protect,getOrderById);

router.put("/:id/pay", protect, updateOrderToPaid);

router.get("/", protect, admin, getOrders);

router.put("/:id/deliver", protect, admin,  updateOrderToDelivered)

export default router;
