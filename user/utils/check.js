const validator = require('validator');
const models  = require('../models');
const user = models.User;

const check = {
	//检查是否符合Source的规则
	isSource : function(str) {
		return validator.isIn(str, ['Web','iOS','Android'])
	},
	//检查用户名是否已存在
	isExistUserName : function (str, callback) {
		user.count({
			where: {
				userName: str
			}
		}).then(function(result){
			callback(result > 0);
		}).catch(function(err){
			console.log(err);
			callback(true);
		});
	}

};

module.exports = check;