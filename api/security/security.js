const crypto = require('crypto');

function encryptBuffer (buffer) {
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

const security = {
	encryptBuffer : encryptBuffer
}

module.exports = security;