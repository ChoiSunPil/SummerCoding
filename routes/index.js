var express = require('express');
var router = express.Router();
const  todo = require('./todo/index.js') 
router.use('/todo',todo)
module.exports = router;
