const request = require('request');

function getIp(req, res, next) {
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
			let err = new Error('服务异常');
			err.status = 400;
			next(err);
		}
	});
}

module.exports = getIp;