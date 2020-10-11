const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');

router.route('/')
	.post(adminController.createBook)
	.put(adminController.updateBook)
	.delete(adminController.deleteBook);

module.exports = router;
