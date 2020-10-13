const express = require('express');
const router = express.Router();

const authenticateController = require('../controllers/authenticateToken');

router.get('/', authenticateController);

module.exports = router;
