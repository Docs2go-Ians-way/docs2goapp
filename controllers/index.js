// this file will coinside with te index routes
const User = require('../models/user');



module.exports = {
// create a method that we can use with postRegister 
            async postRegister(req, res, next) {
                const newUser = new User(
                    {
                        username: req.body.username,
                        email: req.body.email,
                        image: req.body.image
                    });
                    
                    await User.register(newUser, req.body.password);
                    res.redirect('/');
                    }
}
