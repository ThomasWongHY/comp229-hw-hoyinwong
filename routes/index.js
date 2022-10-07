/*
         File Name: index.js
    Student's Name: Ho Yin Wong
         StudentID: 301290744
              Date: 6 October 2022
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home'});
});

/* GET About Us page. */
router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'About Me'});
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});

/* GET Contact Us page. */
router.get('/contactme', function(req, res, next) {
  res.render('contactme', { title: 'Contact Me'});
});

module.exports = router;
