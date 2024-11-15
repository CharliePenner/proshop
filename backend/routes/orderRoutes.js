import express from 'express';
const router = express.Router();
import {
    addOrderItems,
    getMyOrders,
    getOrderByID,
    updateOrderToPaid,
    updateOrderToDelivered,
    getOrders
} from '../controllers/orderController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.post('/', protect, addOrderItems);
router.get('/', protect, admin, getOrders);

router.get('/mine', protect, getMyOrders);
router.get('/:id', protect, getOrderByID);
router.put('/:id/pay', protect, updateOrderToPaid);
router.put('/:id/deliver', protect, admin, updateOrderToDelivered);

export default router;