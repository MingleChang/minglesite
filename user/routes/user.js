const models  = require('../models');
const express = require('express');
const router = express.Router();

//创建新用户（即注册）
router.post('/create', function(req, res, next) {
	let ip = req.body.ip;
	if (!ip) {
		ip = req.ip;
	}
	let registerSource = req.body.registerSource;
	if (!registerSource || (registerSource != 'Web' && registerSource != 'iOS' && registerSource != 'Android')) {
		let err = new Error('registerSource传入参数错误');
		err.status = 1001;
		next(err);
		return;
	}
	let userName = req.body.userName;
	if (!userName) {
		let err = new Error('userName传入参数错误');
		err.status = 1002;
		next(err);
		return;
	}
	let password = req.body.password;
	if (!password) {
		let err = new Error('password传入参数错误');
		err.status = 1003;
		next(err);
		return;
	}
	models.User.create({
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
		// err.status = 1004;
		// err.message = 'userName已存在';
		// next(err);
		res.send(err);
	});
});

module.exports = router;