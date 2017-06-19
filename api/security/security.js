const crypto = require('crypto');

function Security() {
	this.name = 'Security';
	this.description = 'Security';
}

/*
解码并验证数据
*/
Security.decryptParamsString = function (string, key) {
	try {
		let keyText = key ? key : '';
		let buffer = new Buffer(string, 'base64');
		let sourceBuffer = this.encryptBuffer(buffer);
		let sourceString = sourceBuffer.toString();
		let sourceJson = JSON.parse(sourceString);
		let source = sourceJson.source;
		let code = sourceJson.code;
		if (this.encodeString(source, key) != code) {
			return null;
		}
		return JSON.parse(source);
	}catch (e) {
		return null;
	}
}

/*
加密json对象
*/
Security.encryptParams = function (params, key) {
	let jsonString = JSON.stringify(params);
	let encodeSources = this.encodeString(jsonString, key);
	let result = {'source':jsonString, 'code':encodeSources};
	let resultString = JSON.stringify(result);
	let resultBuffer = new Buffer(resultString);
	let encryptBuffer = this.encryptBuffer(resultBuffer);
	return encryptBuffer.toString('base64');
}

/*
字符串加密，最好为不可逆，用于验证数据有效性
*/
Security.encodeString = function (string, key) {
	let keyText = key ? key : '';
	let sourceString = string + keyText;
	let sha512 = crypto.createHash('sha512');
	sha512.update(sourceString);
	let destinationString = sha512.digest('hex');
	return destinationString;
}

/*
加密或解密buffer数据，返回得到新的buffer数据
*/
Security.encryptBuffer = function (buffer) {
	let p_IA1 = 0x2DB12EE;
	let p_IC1 = 0x013A85F;
	let M_Key = 0x534CA75;
	let ID_Key = 0x2EAD25A;

	let Key_0 = M_Key;
	let ID_0 = ID_Key;

	let newBuffer = new Buffer(buffer);
	for (let i = 0; i < buffer.length; i ++) {
		Key_0 = p_IA1 * (Key_0 % ID_0) + p_IC1;
		newBuffer[i] ^= ((Key_0 >> 15) + 0xE3) & 0xFF;
	}
	return newBuffer;
}

module.exports = Security;