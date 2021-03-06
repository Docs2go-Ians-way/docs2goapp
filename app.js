require('dotenv').config()

// require project dependancies

const createError     = require('http-errors');
const express         = require('express');
const path            = require('path');
const cookieParser    = require('cookie-parser');
const logger          = require('morgan');
const bodyParser      = require ('body-parser');
const mongoose        = require('mongoose');
const passport        = require('passport');
const User            = require('./models/user');
const session         = require('express-session');
const methodOverride  = require('method-override');



// connect to mongo db setup
mongoose.connect('mongodb://localhost:27017/test1',{
  useNewUrlParser : true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      console.log('We are connected!! Whoop!');
});


// require routes
const indexRouter     = require('./routes/index');
const posts           = require('./routes/posts');
const reviews         = require('./routes/reviews');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));



//Configure passport and sessions
app.use(session({
  secret: 'legendary',
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// mount routes
app.use('/', indexRouter);
app.use('/posts/:id/reviews', reviews);
app.use('/posts', posts);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
