const express = require('express');
const request = require('request');
const router = express.Router();

router.get('/ip', function(req, res, next) {
	let ip = req.query.ip;
	if (!ip) {
		ip = req.ip;
	};
	let url = global.config.ip_query_address + ip;

	request(url, function (error, response, body) {
		let jsonObject = JSON.parse(body);
		if (error) {
			next(error);
		} else if (jsonObject.code == 0) {
			let info = global.funcs.jsonInfo(200, "成功", jsonObject.data);
			res.send(info);
		} else {
			let info = global.funcs.jsonInfo(500, jsonObject.data);
			res.send(info); 
		}
	});
});

module.exports = router;