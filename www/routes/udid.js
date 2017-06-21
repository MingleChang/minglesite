const express = require('express')
const path = require('path')
const xml2js = require('xml2js');
const router = express.Router();

router.get('/', function(req, res, next) {
	res.render('udid'); 
})

router.get('/get', function(req, res, next) {
	filePath = path.join(path.resolve(__dirname, '..'),'/statics/mobileconfig/udid.mobileconfig');
	res.download(filePath, 'udid.mobileconfig');
})

router.post('/receive', function(req, res, next) {
	let plist = '';//添加接收变量
	req.setEncoding('utf8');
	req.on('data', function(chunk) { 
		plist += chunk;
	});
	req.on('end', function() {
		global.funcs.plist2getparam(plist, function(param) {
			res.redirect(301, '/udid/result' + param);
		});
	});
})

router.get('/result', function(req, res, next) {
	res.render('result', req.query);
})


module.exports = router