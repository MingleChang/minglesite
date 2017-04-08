const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/', function(req, res, next) {
	res.render('udid'); 
})

router.get('/get', function(req, res, next) {
	filePath = path.join(path.resolve(__dirname, '..'),'/statics/mobileconfig/udid.mobileconfig');
	res.download(filePath, 'udid.mobileconfig');
})

router.get('/receive', function(req, res, next) {
	var param = "";
	for (var key in req.query) {
		if (param == "") {
			param = param + key + '=' + req.query[key];
		} else {
			param = param + '&' + key + '=' + req.query[key];
		}
	}
	res.redirect(301, '/udid/result?' + param);
})

router.get('/result', function(req, res, next) {
	res.render('result');
})

module.exports = router