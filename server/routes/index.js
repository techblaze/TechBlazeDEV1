var express = require('express');
var router = express.Router();

var userController = require('../controllers/user-controller');
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('welcome',{home:{ title: 'Welcome to TechBlaze'}});
});

/* Create new User */
router.post('/api/users', userController.create);

/* Get All Users */
router.get('/api/users', userController.GetAllUsers);

router.delete('/api/users', userController.DeleteAllUsers);

module.exports = router;