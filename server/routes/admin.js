const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');

router.route('/')
	.post(adminController.create)
	// .update(adminController.update)
	// .delete(adminController.delete);

module.exports = router;
