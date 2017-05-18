const express = require('express');
const userCreate = require('../controllers/user/userCreate');
const userLogin = require('../controllers/user/userLogin');
const userGet = require('../controllers/user/userGet');
const router = express.Router();

//创建新用户（即注册）
router.post('/create', function(req, res, next) {
	userCreate(req, res, next);
});

//登录
router.post('/login', function(req, res, next) {
	userLogin(req, res, next);
});

//获取用户信息
router.get('/get', function(req, res, next) {
	userGet(req, res, next);
});

module.exports = router;