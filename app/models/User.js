module.exports = function (sequelize, DataTypes) {
	var User = sequelize.define('User', {
		provider: DataTypes.STRING,
		provider_id: DataTypes.STRING,
		username: DataTypes.STRING,
		email: DataTypes.STRING,
		auth_obj: DataTypes.TEXT
	});

	return User;
}