// this file will coinside with te index routes
const User = require('../models/user');


module.exports = {
// create a method that we can use with postRegister 
            postRegister(req, res, next) {
                const newUser = new User(
                    {
                        username: req.body.username,
                        email: req.body.email,
                        image: req.body.image
                    });
                    User.register(newUser, req.body.password, function(err) {
                        if (err) {
                            console.log('error while user register!', err);
                        return next(err);
                    } 
                console.log('User registered succesfully!');
                res.redirect('/');
            });
        }
    }
