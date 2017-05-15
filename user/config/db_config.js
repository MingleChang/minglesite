const db_config = {
	debug: true,

	sqlite_config: {
		database: 'minglechang',
		dialect: 'sqlite',
		storage: 'minglechang.sqlite'
	},

	mysql_config: {
		host: '127.0.0.1',
		username: 'root',
		password: '890805',
		database: 'minglechang',
		dialect: 'mysql'
	}
};

module.exports = db_config;