var express = require('express');
var path = require('path');
var app = express();
var mongoose   = require('mongoose');
var ipaddress = process.env.OPENSHIFT_NODEJS_IP;
var port      = process.env.OPENSHIFT_NODEJS_PORT || 1994;
var bodyParser = require('body-parser');
var routes = require('./server/routes');

var dbUrl = '127.0.0.1:27017/TechBlaze';

//if OPENSHIFT env variables  present, use the available connection info:
if (process.env.OPENSHIFT_MONGODB_DB_URL) {
	dbUrl = process.env.OPENSHIFT_MONGODB_DB_URL +
    process.env.OPENSHIFT_APP_NAME;
}

//Connect to MongoDB database
mongoose.connect(dbUrl,function(){
	console.log('Connected to DB');
});

// view engine setup static
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use('/', routes);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port,ipaddress,function(){
	console.log('listining to port 1994');
});

module.exports = app;