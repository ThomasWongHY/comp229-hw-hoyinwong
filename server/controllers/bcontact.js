/*
         File Name: bcontact.js
    Student's Name: Ho Yin Wong
         StudentID: 301290744
              Date: 28 October 2022
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let Contact = require('../models/bcontact');

module.exports.displayContactList = (req, res, next) => {
    Contact.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('bcontact/list', 
            {title: 'Business Contact', 
            ContactList: contactList, 
            displayName: req.user ? req.user.displayName: ''});      
        }
    }).sort({"name":1});
}

module.exports.displayUpdatePage = (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, ContactToUpdate) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('bcontact/update', {title: 'Update Contact', contact: ContactToUpdate,
            displayName: req.user ? req.user.displayName: ''})
        }
    });
}

module.exports.processUpdatePage = (req, res, next) => {
    let id = req.params.id

    let updatedContact = Contact({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email,
    });

    Contact.updateOne({_id: id}, updatedContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the Business Contact List
            res.redirect('/bcontact');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Contact.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the Business Contact List
             res.redirect('/bcontact');
        }
    });
}