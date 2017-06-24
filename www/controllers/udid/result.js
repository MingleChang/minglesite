function result(req, res, next) {
	res.render('udid/result', req.query);
}

module.exports = result;