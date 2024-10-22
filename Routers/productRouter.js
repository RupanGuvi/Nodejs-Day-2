import express from 'express';
import { getProductById, getProducts } from '../Controllers/productController.js';


const router = express.Router();

router.get("/getdata",getProducts)
router.get("/getdata/:id",getProductById)



export default router;