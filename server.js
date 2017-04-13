const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const bodyParser = require('body-parser'); 

require('./user');
const User = mongoose.model('User');

const app = express(); 

//Serves our angular app upon user landing on domain
let distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.use(bodyParser.json());

//Allows access to our database outside of connect method
let db;
//Stores current logged in user for proper collection and data access 
let currentUser = '';
//Database credentials
let userName = ''; 
let password = '';

//Create express server listening on port 3000
app.listen(3000, () => {
    console.log('Express started')
}); 

//Get main-menu for users authorized
app.get('/app/main-menu');

//Register a new user
app.post('/app/register', (req, res) => {
    console.log('Register user'); 
    let newUser = new User ();
    newUser = req.body;

    db.collection('users').insertOne(newUser,(err, doc) => {
        console.log('Register insert one called');
    }) 
});

//Log a user and verify data
app.post('/app/login', (req, res) => {
    let username = req.body.email;
    let password = req.body.password;
    let validated = {
        key: false
    };

    let cursor = db.collection('users').find({email: username, password: password});
    cursor.toArray((err, results) => {
        if (err) throw err;

        //If results is empty, log in did not match a user.
        if(!results.length) {
            res.send(validated);
        } else {
            validated.key = true;
            res.send(validated);
            currentUser = username; //Sets current user to the user who was just validated
        }
    });
});

//Logs flight data to DB, under collection with the same name as the user who submitted it.
app.post('/data/log-flight', (req, res) => {
    let newFlight = req.body;

    //Choose's the current logged in user's collection for storing flight data
    let collection = currentUser  

    //Inserts the parameter into the chosen collection
    db.collection(collection).insertOne(newFlight, (err, doc) => {
     //Handle errors   
    });
});

app.get('/data/flightLog', (req, res) => {
    let collection = currentUser;

    //Pulls all of the data in the flightData collection
    let cursor = db.collection(collection).find();
    cursor.toArray((err, results) => {
        //Handle errors
        
        res.send(results);
    });
});

//Connect to database
mongodb.MongoClient.connect('mongodb://' + userName + ':' + password + '@ds155820.mlab.com:55820/test-land', (err, database) => {
    db = database;
    if (err) console.log(err);
    console.log('DB connected'); 
});


//#########ERROR HANDLERS ###################

