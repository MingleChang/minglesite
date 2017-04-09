const funcs = {
	//跳转404页面
    page404: function(req, res, next) {
    	res.render('404');
    },
    //跳转502页面
    page502: function(err, req, res, next) {
    	res.render('502');
    },
    //将plist字符串转换为json对象
    plist2json: function(plist, callback) {
    	const xml2js = require('xml2js');
		let startIndex = plist.indexOf("<?xml");
		let endIndex = plist.indexOf("</plist>") + 8;
		let xml = plist.substring(startIndex, endIndex);
		xml2js.parseString(xml, function(err, result){
			let keys = result.plist.dict[0].key;
			let strings = result.plist.dict[0].string;
			let json = {};
			for (let i = 0; i < keys.length; i++) {
				json[keys[i]] = strings[i];
			};
			callback(json);
		})
	},
	//用json对象生成get请求的参数部分
	json2getparam: function(json) {
		let param = "";
		for (let key in json) {
			if (param == "") {
				param = param + '?' + key + '=' + json[key];
			} else {
				param = param + '&' + key + '=' + json[key];
			}
		}
		return param;
	},
	//用plist信息生成get请求的参数部分
	plist2getparam: function(plist, callback) {
		global.funcs.plist2json(plist, function(json){
			callback(global.funcs.json2getparam(json))
		})
	}
};

module.exports = funcs;