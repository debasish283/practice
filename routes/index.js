const express = require('express');
const router = express.Router();
const path = require('path');
router.use('/login', require('./login'));
router.use('/register', require('./register'));

module.exports = router;