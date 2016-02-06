var express = require('express');
var router = express.Router();
var mongoose   = require('mongoose');
var dbUrl = '127.0.0.1:27017/TechBlaze';

var User = require('../models/user').user;

//if OPENSHIFT env variables  present, use the available connection info:
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
	res.render('home',{home:{ title: 'Welcome to TechBlaze'}});
});


/* Create new User */
router.post('/api/users', function(req, res, next) {
    console.log(req.body);
    var user = new User(req.body);
    user.save();
});

/* Create new User */
router.get('/api/users', function(req, res, next) {
	User.find(function (err, users) {
		  if (err) return console.error(err);
		  console.log(users);
		  var count = users.length;
		  console.log('&&&&&'+count);
		  res.json(users);
	});	
});


module.exports = router;