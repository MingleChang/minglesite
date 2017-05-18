const check = require('../../utils/check');
const models  = require('../../models');
const user = models.User;

function userCreate(req, res, next) {
	let ip = req.body.ip;
	if (!ip) {
		ip = req.ip;
	}
	let registerSource = req.body.source;
	if (!registerSource || !check.isSource(registerSource)) {
		let err = new Error('source传入参数错误');
		err.status = 1001;
		next(err);
		return;
	}
	let userName = req.body.userName;
	if (!userName) {
		let err = new Error('userName传入参数错误');
		err.status = 1001;
		next(err);
		return;
	}
	check.isExistUserName(userName, function(result) {
		if (result) {
			let err = new Error('userName已存在');
			err.status = 1002;
			next(err);
			return;
		}else {
			let password = req.body.password;
			if (!password) {
				let err = new Error('password传入参数错误');
				err.status = 1001;
				next(err);
				return;
			}
			user.create({
				userName: userName,
				password: password,
				registerSource: registerSource,
				registerMethod: 'USERNAME',
				registerIp: ip,
				status: 'NORMAL'
			}).then(function(result) {
				let info = global.funcs.jsonInfo(200, "成功", result);
				res.send(info);
			}).catch(function(err){
				err.status = 500;
				err.message = '创建用户失败';
				next(err);
			});
		}
	});
}

module.exports = userCreate;