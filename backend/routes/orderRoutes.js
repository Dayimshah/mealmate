const express = require('express');
const router = express.Router();
const { getOrders, placeOrder } = require('../controllers/orderController');

router.get('/', getOrders);
router.post('/', placeOrder);

module.exports = router;
