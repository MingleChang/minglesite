const express = require('express');
const apn = require('apn');
const path = require('path');
const router = express.Router();

router.get('/test', function(req, res, next) {
	let apnProvider = new apn.Provider({
		token: {
			key: path.join(global.config.statics_path,'/AuthKey.p8'),
			keyId: '279J2GG6F2',
			teamId: 'USZ9R7RQAA'
		},
		production: false
	});

	let deviceToken = ['c8f9874aa3977458469272f818b1261f036a59e778fd34efad78f519f8cf1475'];

	var notification = new apn.Notification();

	notification.topic = 'mingle.chang.push';

	notification.expiry = Math.floor(Date.now() / 1000) + 3600;

	notification.badge = 1;

	notification.sound = 'default';

	notification.alert = 'Hello World \u270C';

	notification.payload = {test: 123};

	apnProvider.send(notification,deviceToken).then(function(result) {  
    // Check the result for any failed devices
    	res.send(result);
	});
});

module.exports = router;