import express from 'express';
import {
  getProducts,
  createProducts,
  deleteProducts,
  updateProducts,
  getOneProducts,
  getOwnerProducts,
} from '../controller/products.controller.js';
import authMiddleware from '../middleware/authenticated.middleware.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getOneProducts);
router.get('/owner/:ownerId', getOwnerProducts);
router.post('/create', authMiddleware.checkSellerRole, createProducts);
router.delete('/delete/:id', authMiddleware.checkSellerRole, deleteProducts);
router.put('/update/:id', authMiddleware.checkSellerRole, updateProducts);

export default router;
