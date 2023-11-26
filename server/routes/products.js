import express from 'express';
import {
  getProducts,
  createProducts,
} from '../controller/products.controller.js';

const router = express.Router();

router.get('/', getProducts);
router.post('/create', createProducts);

export default router;
