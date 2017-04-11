const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

let db; 
let userName = ''; 
let password = '';

//Create express server listening on port 3000
app.listen(3000, () => {
    //Logic
});

//Serves our angular app upon user landing on domain
let distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.post('/logData', (req, res) => {
    console.log('Post called');
    console.log(req.body); //Temporary for testing the code
});

app.get('/flightLog', (req, res) => {
    console.log('Get called');
    
    let cursor = db.collection('flights').find();
    cursor.toArray((err, results) => {
        console.log(results);
    });
});

mongodb.MongoClient.connect('mongodb://' + userName + ':' + password + '@ds155820.mlab.com:55820/test-land', (err, database) => {
    db = database;
    if (err) console.log(err);
    console.log('DB connected'); 
})