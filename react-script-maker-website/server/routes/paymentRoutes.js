const express = require('express');
const router = express.Router();
const paymentController = require('../../controllers/paymentController');

router.get('/payment', paymentController.getPayment);
router.post('/payment', paymentController.createPayment);
router.put('/payment/:id', paymentController.updatePayment);
router.delete('/payment/:id', paymentController.deletePayment);

module.exports = router;