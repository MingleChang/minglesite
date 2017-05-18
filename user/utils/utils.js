const check = require('./check');
const models  = require('../models');
const loginLog = models.LoginLog;

const utils = {
	createLoginLog : function(userId, source, ip, method) {
		loginLog.create({
			userId: userId,
			loginIp: ip,
			loginSource: source,
			loginMethod: method
		});
	}

};

module.exports = utils;