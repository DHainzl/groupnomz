module.exports = {
	port: process.env.GNZ_PORT || '8080',
	sql: {
		host: process.env.GNZ_HOST || '127.0.0.1',
		user: process.env.GNZ_USER || 'root',
		pass: process.env.GNZ_PASS || '',
		db: process.env.GNZ_DB || 'groupnomz',
		dialect: process.env.GNZ_DIALECT || 'sqlite'
	}
};