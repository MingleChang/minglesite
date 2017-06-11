const path = require('path');

const config = {
	name: 'user',
	description: 'user description',
	debug: false,
	session_secret: 'minglechang',

	//端口
	port: 8002,

	statics_path: path.join(path.resolve(__dirname, '..'),'/statics')
};

module.exports = config;