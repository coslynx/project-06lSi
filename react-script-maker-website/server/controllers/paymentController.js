const Payment = require('../models/Payment');

const paymentController = {
  createPayment: async (req, res) => {
    try {
      const { userId, scriptId, amount, paymentMethod } = req.body;

      const newPayment = new Payment({
        userId,
        scriptId,
        amount,
        paymentMethod
      });

      await newPayment.save();

      res.status(201).json({ message: 'Payment created successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to create payment', error: error.message });
    }
  },

  getPaymentsByUser: async (req, res) => {
    try {
      const userId = req.params.userId;

      const payments = await Payment.find({ userId });

      res.status(200).json(payments);
    } catch (error) {
      res.status(500).json({ message: 'Failed to get payments', error: error.message });
    }
  },

  getAllPayments: async (req, res) => {
    try {
      const payments = await Payment.find();

      res.status(200).json(payments);
    } catch (error) {
      res.status(500).json({ message: 'Failed to get payments', error: error.message });
    }
  }
};

module.exports = paymentController;