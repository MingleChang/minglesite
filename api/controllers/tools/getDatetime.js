function  getDatetime(req, res, next) {
	let timestamp = Date.now();
	let jsonInfo = {"timestamp":timestamp};
	let info = global.funcs.jsonInfo(200, "成功", jsonInfo);
	res.send(info);
}

module.exports = getDatetime;