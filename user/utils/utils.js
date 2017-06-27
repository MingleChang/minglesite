const check = require('./check');
const models  = require('../models');
const loginLog = models.LoginLog;

function Utils() {
	this.name = 'Utils';
	this.description = 'Utils';
}

Utils.createLoginLog = function(userId, source, ip, method) {
	loginLog.create({
		userId: userId,
		loginIp: ip,
		loginSource: source,
		loginMethod: method
	});
}

module.exports = Utils;