// this file will coinside with te index routes
const User = require('../models/user');


module.exports = {
// create a method that we can use with postRegister 
    postRegister(req, res, next) {
        User.register(new User({username: req.body.username}), req.body.password, function(err) {
        if (err) {
        console.log('error while user register!', err);
        return next(err);
    } 
        console.log('User registered succesfully!');
        res.redirect('/');
    });
    }
    }
