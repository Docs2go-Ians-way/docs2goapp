// this file will coinside with the index routes
const User = require('../models/user');
const passport = require('passport');


//METHODS
module.exports = {
// create a method that we can use with postRegister 

            //POST /register method
            async postRegister(req, res, next) {
                const newUser = new User(
            {
                        username: req.body.username,
                        email: req.body.email,
                        image: req.body.image
                    });
                    
                    await User.register(newUser, req.body.password);
                    res.redirect('/');
            },
            // POST /login method
            postLogin(req,res, next){
                passport.authenticate('local', {
                    successRedirect: '/',
                    failureRedirect: '/login'
                        })(req, res, next);
            },
            // POST /logout method
            getLogout(req,res, next){
                    req.logout();
                    res.redirect('/');
            }
    }
