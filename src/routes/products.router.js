import { Router } from "express";
import { productList } from "../controllers/products.controller.js";

const router = Router();

router.get("/product-list", productList);

export default router;
