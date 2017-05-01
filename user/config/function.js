const funcs = {
  jsonInfo: function (code, msg, result) {
    return {"code": code, "message": msg, "result": result};
  },

  json404: function(req, res, next) {
  	let err = new Error('Not Found');
  	err.status = 404;
  	next(err);
  },

	json502: function(err, req, res, next) {
  	let info = global.funcs.jsonInfo(err.status || 502, err.message);
		res.send(info);
	}
};

module.exports = funcs;