const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');

router.route('/')
	.post(adminController.createBook)
	// .update(adminController.updateBook)
	.delete(adminController.deleteBook);

module.exports = router;
