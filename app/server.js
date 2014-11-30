// requires
var express			= require('express');
var app				= express();

// get our config file
var config = require('./config/config.js');

// use ../public to serve all files
app.use(express.static(__dirname + '/../public'));

// listen on port config.port and notify user
app.listen(config.port);
console.log('Groupnomz started on port %d!', config.port);

// expose app
exports = module.exports = app;