const check = require('../../utils/check');
const models  = require('../../models');
const user = models.User;

function userGet(req, res, next) {
	let userId = req.query.userId;
	if (!userId || userId.length === 0) {
		let err = new Error('userId不能为空');
		err.status = 1001;
		next(err);
		return;
	}
	user.findOne({
		where: {
			id : userId
		}
	}).then(function(result) {
		let info = global.funcs.jsonInfo(200, "成功", result);
		res.send(info);
	}).catch(function(err){
		err.status = 500;
		err.message = '获取用户信息失败';
		next(err);
	});
}

module.exports = userGet;