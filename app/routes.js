var registerCRUD = function (app, url, modelPath) {
	var models = app.get('models');
	console.log('registering /api/' + url);
	app.get('/api/' + url, function (req, res) {
		models[url].findAll().success(function (collection) {
			res.json(collection);
		});
	});
}

module.exports = function (app) {
	registerCRUD(app, 'User', './models/User');

	app.get('*', function (req, res) {
		res.sendfile('../public/views/index.html');
	});
}