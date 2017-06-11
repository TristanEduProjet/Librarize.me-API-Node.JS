'use strict';

const router = require('express').Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* REST API */
router.use('/', require('./api'));

module.exports = router;
