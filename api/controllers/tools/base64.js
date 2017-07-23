/*
value: 需要进行加密或者界面的字符串
method:加密还是解密（encrypt：加密   decrypted：解密）
*/

function  base64(req, res, next) {
	let value = req.query.value;
	let method = req.query.method;
	if (!value) {
		errorFunc('value不能为空');
		return;
	}
	if (method == 'encrypt') {
		encrypt(value);
	} else if (method == 'decrypted') {
		decrypted(value);
	} else {
		errorFunc('method传入参数错误');
	}

	function encrypt(value) {
		let buffer = new Buffer(value);
		let result = buffer.toString('base64');
		let jsonInfo = {"source":value,"method":'encrypt',"result":result};
		let info = global.funcs.jsonInfo(200, "成功", jsonInfo);
		res.send(info);
	}
	function decrypted(value) {
		var buffer = new Buffer(value, 'base64')
		let result = buffer.toString('utf-8');
		let jsonInfo = {"source":value,"method":'decrypted',"result":result};
		let info = global.funcs.jsonInfo(200, "成功", jsonInfo);
		res.send(info);
	}
	function errorFunc(text) {
		let err = new Error(text);
		err.status = 400;
		next(err);
	}
}



module.exports = base64;