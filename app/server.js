// requires
var express			= require('express');
var app				= express();

// get our config file
var config = require('./config/config.js');
var models = require('./models');
app.set('models', models);

// use ../public to serve all files
app.use(express.static(__dirname + '/../public'));

models.sequelize.sync().success(function() {
	require('./routes.js')(app);
	
	app.listen(config.port);
	console.log('Groupnomz started on port %d!', config.port);
});

// expose app
exports = module.exports = app;