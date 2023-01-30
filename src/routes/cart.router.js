import { Router } from "express";
import tokenValidationMiddleware from "../middlewares/tokenValidation.js";
import { getCart, addCart, deleteCart } from "../controllers/cart.controller.js";


const router = Router()

router.get("/get-cart", tokenValidationMiddleware, getCart)
router.post("add-cart", tokenValidationMiddleware, addCart)
router.post("add-delete", tokenValidationMiddleware, deleteCart)

export default router