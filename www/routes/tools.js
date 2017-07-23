const express = require('express')
const router = express.Router();

const hashEncrypt = require('../controllers/tools/hashEncrypt');

const base64 = require('../controllers/tools/base64');

router.get('/hashEncrypt', function(req, res, next) {
	hashEncrypt(req, res, next);
})

router.get('/base64', function(req, res, next) {
	base64(req, res, next);
})

module.exports = router