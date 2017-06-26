const express = require('express')
const router = express.Router();

const index = require('../controllers/index/index');
const about = require('../controllers/index/about');

router.get('/', function(req, res, next) {
	index(req, res, next);
})

router.get('/about', function(req, res, next) {
	about(req, res, next);
})

router.get('/test', function(req, res, next) {
	res.render('index/test');
})

module.exports = router