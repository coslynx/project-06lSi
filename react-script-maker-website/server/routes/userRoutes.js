const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/dashboard', userController.getUserDashboard);
router.get('/purchased-scripts', userController.getPurchasedScripts);
router.get('/download-history', userController.getDownloadHistory);
router.put('/update-account', userController.updateAccountSettings);

module.exports = router;