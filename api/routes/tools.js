const express = require('express');
const router = express.Router();

const getIp = require('../controllers/tools/getIp');
const getDatetime = require('../controllers/tools/getDatetime');
const hashEncrypt = require('../controllers/tools/hashEncrypt');
const base64 = require('../controllers/tools/base64');

router.get('/ip', function(req, res, next) {
	getIp(req, res, next);
});

router.get('/datetime', function(req, res, next) {
	getDatetime(req, res, next);
});

router.get('/hashEncrypt', function(req, res, next) {
	hashEncrypt(req, res, next);
});

router.get('/base64', function(req, res, next) {
	base64(req, res, next);
});

module.exports = router;