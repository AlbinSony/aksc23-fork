var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const {engine} = require('express-handlebars');
var session = require('express-session')
var passport = require('passport')
var indexRouter = require('./api/routes/index');
var connect = require('./db/db')
const MongoStore =require('connect-mongo')(session)
//var initializePassport =require('./api/auth/passport-config')
//var User=require('./api/models/users')

require('dotenv').config()


var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', engine({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: `${__dirname}/views`,
    partialsDir: `${__dirname}/views/partials`
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: process.env.SESSION_SECRET,
    cookie: {maxAge: parseInt(process.env.SESSION_MAX_AGE)},
    store: new MongoStore({
        url: process.env.MONGO,
        ttl:12*24*60*60,
        autoRemove: true
    }),
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(passport.authenticate('session'))


app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

connect();

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // console.log(err)
    // render the error page
    res.status(err.status || 500);
    res.render('error', {Error: true, ErrorStatus: err.status || 500, ErrorMessage: err.message});
});

module.exports = app;
