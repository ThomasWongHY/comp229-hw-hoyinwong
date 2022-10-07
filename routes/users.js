/*
         File Name: app.css
    Student's Name: Ho Yin Wong
         StudentID: 301290744
              Date: 6 October 2022
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
