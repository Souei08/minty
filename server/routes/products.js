import express from 'express';
import {
  getProducts,
  createProducts,
  deleteProducts,
  updateProducts,
  getOneProducts,
} from '../controller/products.controller.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getOneProducts);
router.post('/create', createProducts);
router.delete('/delete/:id', deleteProducts);
router.put('/update/:id', updateProducts);

export default router;
