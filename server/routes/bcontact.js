/*
         File Name: bcontact.js
    Student's Name: Ho Yin Wong
         StudentID: 301290744
              Date: 28 October 2022
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let contactController = require('../controllers/bcontact');

// helper function for guard purposes
function reqiureAuth(req, res, next)
{
    // check if the user is logged in 
    if(!req.isAuthenticated())
    {
        return res.redirect('/login')
    }
    next();
}

/* GET Route for the Book List page - READ Operation */
router.get('/', reqiureAuth, contactController.displayContactList);

/* GET Route for displaying the UPDATE page */
router.get('/update/:id', reqiureAuth, contactController.displayUpdatePage);

/* POST Route for processing the UPDATE page */
router.post('/update/:id', reqiureAuth, contactController.processUpdatePage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', reqiureAuth, contactController.performDelete);

/* POST to perform  Deletion - DELETE Operation */
router.post('/delete/:id', reqiureAuth, contactController.performDelete);

module.exports = router;