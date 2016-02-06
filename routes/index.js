var express = require('express');
var router = express.Router();
var mongoose   = require('mongoose');
var dbUrl = '127.0.0.1:27017/TechBlaze';

var user = require('../models/user').user;

//if OPENSHIFT env variables are present, use the available connection info:
if (process.env.OPENSHIFT_MONGODB_DB_URL) {
	dbUrl = process.env.OPENSHIFT_MONGODB_DB_URL +
    process.env.OPENSHIFT_APP_NAME;
}
mongoose.connect(dbUrl,function(){
	console.log('Connected to DB');
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to MongoDB')
});

/* GET home page. */
router.get('/', function(req, res, next) {
	user.find(function (err, users) {
		  if (err) return console.error(err);
		  console.log(users);
		  var count = users.length;
		  console.log('&&&&&'+count);
		  res.render('home',{home:{ title: 'Welcome to TechBlaze', UserCount:count }});
	})	    	
});

module.exports = router;