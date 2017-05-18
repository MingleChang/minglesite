const utils = require('../../utils/utils');
const check = require('../../utils/check');
const models  = require('../../models');
const user = models.User;

function userLogin(req, res, next) {
	let ip = req.body.ip;
	if (!ip) {
		ip = req.ip;
	}
	let loginSource = req.body.source;
	if (!loginSource || !check.isSource(loginSource)) {
		let err = new Error('source传入参数错误');
		err.status = 1001;
		next(err);
		return;
	}
	let userName = req.body.userName;
	if (!userName || userName.length === 0) {
		let err = new Error('userName不能为空');
		err.status = 1001;
		next(err);
		return;
	}
	let password = req.body.password;
	if (!password || password.length === 0) {
		let err = new Error('password不能为空');
		err.status = 1001;
		next(err);
		return;
	}
	user.findOne({
		where: {
			userName : userName,
			password : password
		}
	}).then(function(result) {
		if (result) {
			utils.createLoginLog(result.id, loginSource, ip, 'USERNAME');
			let info = global.funcs.jsonInfo(200, "成功", result);
			res.send(info);
		}else {
			let err = new Error('用户不存在');
			err.status = 1001;
			next(err);
			return;
		}
	}).catch(function(err){
		err.status = 500;
		err.message = '登录失败';
		next(err);
	});
}

module.exports = userLogin;