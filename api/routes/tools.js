const express = require('express');
const router = express.Router();

const getIp = require('../controllers/tools/getIp');
const getDatetime = require('../controllers/tools/getDatetime');

router.get('/ip', function(req, res, next) {
	getIp(req, res, next);
});

router.get('/datetime', function(req, res, next) {
	getDatetime(req, res, next);
});

module.exports = router;