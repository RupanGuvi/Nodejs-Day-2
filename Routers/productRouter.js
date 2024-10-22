import express from 'express';
import { getProducts } from '../Controllers/productController.js';


const router = express.Router();

router.get("/getdata",getProducts)




export default router;