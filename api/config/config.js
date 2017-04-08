const config = {
	name: 'api',
	description: 'api description',
	debug: false,
	session_secret: 'minglechang',

	//端口
	port: 8001,


	//ip查询接口,查询ip的相关信息
	ip_query_address: 'http://ip.taobao.com/service/getIpInfo.php?ip=',
};

module.exports = config;