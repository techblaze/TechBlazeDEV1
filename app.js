var express = require('express');
var path = require('path');
var app = express();

var ipaddress = process.env.OPENSHIFT_NODEJS_IP;
var port      = process.env.OPENSHIFT_NODEJS_PORT || 1990;

var routes = require('./routes/index');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/', routes);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port,ipaddress,function(){
	console.log('listining to port 1990');
});

module.exports = app;