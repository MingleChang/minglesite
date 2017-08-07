const crypto = require('crypto');

function aes(req, res, next) {
	// body...

	let text = req.body.text || req.query.text || 'text';
	res.send(text);

	// var data = "123";
	// var iv = "0000000000000000";
	// var key = "00000000000000000000000000000001";
 //    var clearEncoding = 'utf8';
 //    var cipherEncoding = 'base64';
 //    var cipherChunks = [];
 //    var cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
 //    cipher.setAutoPadding(true);
 //    cipherChunks.push(cipher.update(data, clearEncoding, cipherEncoding));
 //    cipherChunks.push(cipher.final(cipherEncoding));
	// res.send(cipherChunks.join(''));
}

module.exports = aes;