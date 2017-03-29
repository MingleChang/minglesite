const express = require('express');
const router = express.Router();

router.get('/ip', function(req, res, next) {
	let info = global.funcs.jsonInfo(200, "成功", req.ip);
	res.send(info) 
});

module.exports = router;