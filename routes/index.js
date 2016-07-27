var express = require('express');
var router = express.Router();
var config = require('./config');
var mongooz = require('mongoose');

mongooz.connect(config.database);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
  { title: 'Welcome to Trivia' });
});

router.get('/loginPage', function(req, res, next) {
  res.render('loginPage',
  { title: 'Welcome to Trivia' });
});

router.get('/questions/new', function(req, res, next) {
  res.render('latestQA',
  { title: 'Welcome to Trivia' });
});

router.post('/loginPage', function(req, res){
  res.render('latestQA',
  { title: 'Welcome to Trivia' });
});




module.exports = router;
