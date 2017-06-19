const express = require('express');

const getIp = require('../controllers/tools/getIp');
const getDatetime = require('../controllers/tools/getDatetime');

const request = require('request');
const router = express.Router();

router.get('/ip', function(req, res, next) {
	getIp(req, res, next);
});

router.get('/datetime', function(req, res, next) {
	getDatetime(req, res, next);
});

module.exports = router;