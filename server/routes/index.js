var express = require('express');
var router = express.Router();
var mongoose   = require('mongoose');
// Get the User Model 
var User = require('../models/user').user;

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

/* Get All Users */
router.get('/api/users', function(req, res, next) {
	User.find(function (err, users) {
		  if (err) return console.error(err);		  
		  var count = users.length;
		  res.json(users);
	});	
});

module.exports = router;