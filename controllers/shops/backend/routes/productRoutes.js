import express from "express";
const router = express.Router();
import findProductController from "../controllers/findProductController.js";

import {
    deleteProduct,
    createProduct,
    updateProduct,
    createProductReview,
    getProducts,
  } from '../controllers/productController.js'
  import { protect, admin } from '../middleware/authMiddleware.js'
  import findProductsController from "../controllers/findProductsController.js";


router.get("/", findProductsController)
router.post("/", protect, admin, createProduct);
router.post("/:id/reviews", protect, createProductReview);
router.delete("/:id", protect, admin, deleteProduct);
router.put("/:id", protect, admin, updateProduct);
router.get("/:id", findProductController)

export default router;