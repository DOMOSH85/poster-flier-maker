const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/templates', require('./template'));

module.exports = router; 