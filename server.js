const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
const FLIGHTDATA_COLLECTION = 'flightData';

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
    let newFlight = req.body;
    console.log('Post called');

    //Logs the submitted data to the database, under the flightData collection
    db.collection(FLIGHTDATA_COLLECTION).insertOne(newFlight, (err, doc) => {
        console.log('Insert One called');
    });
});

app.get('/flightLog', (req, res) => {
    console.log('Get called');

    //Pulls all of the data in the flightData collection
    let cursor = db.collection(FLIGHTDATA_COLLECTION).find();
    cursor.toArray((err, results) => {
        console.log(results);
    });
});

mongodb.MongoClient.connect('mongodb://' + userName + ':' + password + '@ds155820.mlab.com:55820/test-land', (err, database) => {
    db = database;
    if (err) console.log(err);
    console.log('DB connected'); 
})