'use strict';

const router = require('express').Router();

/* GET ... listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
