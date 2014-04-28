var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');

var routes = require('./routes');
var users = require('./routes/user');
var courses = require('./routes/course');


var app = express();
app.redis = require('redis');

//app.redis.debug_mode = true;

var db = app.redis.createClient();

app.set('db', db);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

// We are going to protect /api routes with JWT
app.use('/api', expressJwt({secret: 'secret'}));

app.use(express.json());
app.use(express.urlencoded());

app.get('/', routes.index);
app.get('/users', users.list);

app.post('/api/user/register.do'	, users.register);
app.post('/api/user/login'			, users.login);
app.post('/api/course/create.do'	, courses.create);


app.get('/course/create', courses.create);

app.get('/course/get', courses.get);


//  for test
app.get('/user/register', users.register);
app.get('/user/login', users.login);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
		// TODO: app.get('db').end();
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	// TODO: app.get('db').end();
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
