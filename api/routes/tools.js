const express = require('express');
const router = express.Router();

const getIp = require('../controllers/tools/getIp');
const getDatetime = require('../controllers/tools/getDatetime');
const hashEncrypt = require('../controllers/tools/hashEncrypt');
const base64 = require('../controllers/tools/base64');
const aes = require('../controllers/tools/aes');

router.get('/ip', function(req, res, next) {
	getIp(req, res, next);
});

router.get('/datetime', function(req, res, next) {
	getDatetime(req, res, next);
});

router.all('/hashEncrypt', function(req, res, next) {
	hashEncrypt(req, res, next);
});

router.all('/base64', function(req, res, next) {
	base64(req, res, next);
});

// router.all('/aes', function(req, res, next) {
// 	aes(req, res, next);
// });

module.exports = router;