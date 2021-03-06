const express = require('express');
const router = express.Router();
const passport = require('passport');
const { postRegister, postLogin, getLogout} = require('../controllers/index');
const { asyncErrorHandler } = require('../middleware/index');

 
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Docs2go' });
});

/* GET /register */
router.get('/register', (req, res, next) => {
  res.send('GET /register');
});

/* POST /register */
router.post('/register', asyncErrorHandler(postRegister));

/* GET /login */ //Get Login Page
router.get('/login', (req, res, next) => {
  res.send('GET /login');
});

/* POST /login */ // Log the user in via POST on login route
router.post('/login', postLogin);

//GET logout
router.get('/logout', getLogout);

/* GET /profile */ //User profile route
router.get('/profile', (req, res, next) => {
  res.send('GET /profile');
});

/* UPDATE /profile/:user_id */ 
router.put('/profile', (req, res, next) => {
  res.send('PUT /profile/:user_id');
});

/* GET /forgot password */
router.get('/forgot', (req, res, next) => {
  res.send('GET /forgot');
});

/* PUT /forgot-password */
router.put('EDIT /forgot', (req, res, next) => {
  res.send('PUT /forgot');
});

/* GET /reset/:token */
router.get('/reset/:token', (req, res, next) => {
  res.send('GET /reset/:token');
});

/* GET /reset /:token*/
router.put('/reset/:token', (req, res, next) => {
  res.send('PUT /reset/:token');
});

module.exports = router;

// 7 RESTFUL ROUTES
// GET index                    /posts 
// GET new                      /posts/new 
// POST create                  /posts 
// GET show                     /posts/:id 
// GET edit                     /posts/:id/edit 
// PUT update                   /posts/:id
// DELETE destroy               /posts/:id

