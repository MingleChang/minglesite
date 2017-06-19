const express = require('express');
const request = require('request');
const router = express.Router();

router.all('/', function(req, res, next) {
	res.send({'a':'b'});
});

module.exports = router;