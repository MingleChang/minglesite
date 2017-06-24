const express = require('express')
const path = require('path')
const xml2js = require('xml2js');
const router = express.Router();

const index = require('../controllers/udid/index');
const result = require('../controllers/udid/result');
const getMobileConfig = require('../controllers/udid/getMobileConfig');
const receive = require('../controllers/udid/receive');

router.get('/', function(req, res, next) {
	index(req, res, next);
})

router.get('/get', function(req, res, next) {
	getMobileConfig(req, res, next);
})

router.post('/receive', function(req, res, next) {
	receive(req, res, next);
})

router.get('/result', function(req, res, next) {
	result(req, res, next);
})


module.exports = router