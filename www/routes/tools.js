const express = require('express')
const router = express.Router();

const index = require('../controllers/tools/hashEncrypt');

router.get('/hashEncrypt', function(req, res, next) {
	index(req, res, next);
})

module.exports = router