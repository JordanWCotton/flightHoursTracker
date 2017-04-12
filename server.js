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

//app.use('/app/', routes) //Use our routes file when the route starts with /, so all of them!

let db; 
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

//Log a user in
app.post('/app/login', (req, res) => {
    logUserIn(req.body);
});

function logUserIn(user) {
    console.log('Log user in called!');
    let username = user.email;
    let password = user.password;

    let cursor = db.collection('users').find({email: username});
    cursor.toArray((err, results) => {
        console.log(results); //results contain user info
    })

};

//Logs flight data to DB, under collection with the same name as the user who submitted it.
app.post('/data/log-flight', (req, res) => {
    let newFlight = req.body;
    let collection = 'Jcotton'  //This is where the dynamic assignment of the current user's user name will be made for collection choice
    console.log('Posting flight data');

    //Inserts the parameter into the chosen collection
    db.collection(collection).insertOne(newFlight, (err, doc) => {
        console.log('insertOne called!');
    });
});

app.get('/data/flightLog', (req, res) => {
    let collection = 'Jcotton';
    console.log('Pulling all flight data');

    //Pulls all of the data in the flightData collection
    let cursor = db.collection(collection).find();
    cursor.toArray((err, results) => {
        console.log(results);
    });
});

//Connect to database
mongodb.MongoClient.connect('mongodb://' + userName + ':' + password + '@ds155820.mlab.com:55820/test-land', (err, database) => {
    db = database;
    if (err) console.log(err);
    console.log('DB connected'); 
});


//#########ERROR HANDLERS ###################

