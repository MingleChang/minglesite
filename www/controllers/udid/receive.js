function receive(req, res, next) {
	let plist = '';//添加接收变量
	req.setEncoding('utf8');
	req.on('data', function(chunk) { 
		plist += chunk;
	});
	req.on('end', function() {
		global.funcs.plist2getparam(plist, function(param) {
			res.redirect(301, '/udid/result' + param);
		});
	});
}

module.exports = receive;