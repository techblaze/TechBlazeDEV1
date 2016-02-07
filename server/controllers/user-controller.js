var User = require('../models/user').user;

module.exports.create = function(req,res){
	console.log('!!!!!!!!!'+req);
	console.log(req.body);
    var user = new User(req.body);
    //user.save();
    res.json(user.save());
};

module.exports.GetAllUsers = function(req,res){
	User.find(function (err, users) {
		  if (err) return console.error(err);		  
		  var count = users.length;
		  res.json(users);
	});	
};

module.exports.DeleteAllUsers = function(req,res){
	User.remove({}, function(err,removed) {
		console.log('Deleted All users' + removed);
		res.json(removed);
	});	
};
