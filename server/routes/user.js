const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.route('/')
	.put(userController.savePurchased)
	.post(userController.booksPurchased);

module.exports = router;
