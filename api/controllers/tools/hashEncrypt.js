const crypto = require('crypto');
/*
source:明文
method:加密方式
password：密码(可选,如果传入了password则认为是hmac)
*/
function  hashEncrypt(req, res, next) {
	let source = req.query.source || req.body.source;
	let method = req.query.method || req.body.source;
	let password = req.query.password || req.body.source;
	if (!source) {
		let err = new Error('明文不能为空');
		err.status = 400;
		next(err);
		return;
	}
	if (!method) {
		let err = new Error('加密方式错误');
		err.status = 400;
		next(err);
		return;
	}
	let cipher; 
	if (password == undefined) {
		cipher = crypto.createHash(method);
	}else {
		cipher = crypto.createHmac(method, password);
	}
	cipher.update(source);
	let ciphertext = cipher.digest('hex');
	let jsonInfo = {"source":source,"method":method,"password":password,"result":ciphertext};
	let info = global.funcs.jsonInfo(200, "成功", jsonInfo);
	res.send(info);
}

module.exports = hashEncrypt;