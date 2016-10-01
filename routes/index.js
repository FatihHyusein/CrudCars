var express = require('express');
var router = express.Router();

router.use('/cars', require('./carRoutes'));

module.exports = router;