const models  = require('../models');
const express = require('express');
const router = express.Router();

router.get('/create', function(req, res, next) {
	models.User.create({
		userName: "bbbb"
	}).then(function(result) {
		let info = global.funcs.jsonInfo(200, "成功", result);
		res.send(info);
	}).catch(function(err){
		next(err);
	});
});

module.exports = router;