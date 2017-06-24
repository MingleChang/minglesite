const path = require('path')

function getMobileConfig(req, res, next) {
	filePath = path.join(path.resolve(__dirname, '../..'),'/statics/mobileconfig/udid.mobileconfig');
	res.download(filePath, 'udid.mobileconfig');
}

module.exports = getMobileConfig;