var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('scb', function(req, res, next) {
  res.render('scb', { title: 'SCB'});
});

module.exports = router;
