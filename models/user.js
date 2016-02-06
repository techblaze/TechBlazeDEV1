var mongoose   = require('mongoose');

var userSchema = mongoose.Schema({
    name: String
});

var user = mongoose.model('users', userSchema);


module.exports = {user: user};