import express from 'express';
import { getProductById, getProducts, createProduct, updateProductById, deleteProductById } from '../controllers/product.controller.js';

const router = express.Router();

router.post('/', createProduct);
router.get('/', getProducts);
router.get('/:id', getProductById);
router.patch('/:id', updateProductById);
router.delete('/:id', deleteProductById);

export default router;