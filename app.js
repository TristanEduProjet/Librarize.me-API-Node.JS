'use strict';

const express = require('express');
const path = require('path');
//const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const app = express();
const conf = require('./config/db');
const db = require('mongoose').connect('mongodb://'+conf[conf.env].host+'/'+conf[conf.env].database);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(require('morgan')('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('cookie-parser')());
app.use(express.static(path.join(__dirname, 'public')));

// rend la bdd accessible depuis toutes les requêtes
app.use(function(req, res, next) {
    req.db = db;
    next();
});
app.use('/', require('./routes'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
/*app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  });
});*/

module.exports = app;
