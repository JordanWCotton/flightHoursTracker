const express = require('express'); 
const path = require('path'); 
const mongoose = require('mongoose'); 
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const crypto = require('crypto'); 
const router = express.Router();

require('./user'); 
const User = mongoose.model('User');

const app = express(); 

let distDir = __dirname + "/dist/";
//Serves our angular app upon user landing on domain
app.use(express.static(distDir)); 
 
app.use(bodyParser.json());

//Allows access to our database outside of connect method
let db;
//Stores current logged in user for proper collection and data access 
let currentUser = '';
//Database credentials
let username = '';  
let password = '';

//Create express server listening on port 3000
app.listen(process.env.PORT || 3000, () => {
    console.log('Express started')
}); 

//Get main-menu for users authorized
app.get('/app/main-menu');

//Register a new user
app.post('/app/register', (req, res) => { 
    let newUser = new User ();
    newUser.name = req.body.name;
    newUser.email = req.body.email.toLowerCase();
    
    newUser.setPassword(req.body.password);

    db.collection('users').insertOne(newUser,(err, doc) => {
        if (!err) {
            res.sendStatus(200);
        };
    }); 
});

//Log in user
app.post('/app/login', (req, res) => {
    let username = req.body.email.toLowerCase();
    let password = req.body.password;
    let validated = {
        key: false
    };

    let cursor = db.collection('users').find({email: username});
    cursor.toArray((err, results) => {
        if (err) throw err;

        if(!results.length) {
            res.send(validated);
        } else {
            let salt = results[0].salt;
            let hash = crypto.pbkdf2Sync(password, salt, 1000, 512, 'sha512').toString('hex');
            
            if (results[0].hash === hash) {
                validated.key = true;
                res.send(validated);
                currentUser = username; 
            } else {
                res.send(validated);
            }
        }
    });
});

//Logs flight data to DB, under collection with the same name as the user who submitted it.
app.post('/data/log-flight', (req, res) => {
    //Store flight data into local variables
    let newFlightOne = req.body.flightOne;
    let newFlightTwo = req.body.flightTwo;
    let newFlightThree = req.body.flightThree;

    //Store passed boolean to determine if the user logged multiple flight profiles 
    let secondFlightPresent = req.body.secondFlight;
    let thirdFlightPresent = req.body.thirdFlight;

    //Choose's the current logged in user's collection for storing flight data
    let collection = currentUser  

    //Inserts the flight into the current user's table of flight data
    db.collection(collection).insertOne(newFlightOne, (err, doc) => {
        if (!err) { 
            res.sendStatus(200);
        };
    });
 
    //If the user submitted the flight with multiple profiles, log those as well, as separate flights
    if (secondFlightPresent == true) {
        db.collection(collection).insertOne(newFlightTwo, (err, doc) => {});
    };

    if (thirdFlightPresent == true) {
        db.collection(collection).insertOne(newFlightThree, (err, doc) => {});
    };
}); 

//Pulls all flight data from current user's collection of logged flights
app.get('/data/flightLog', (req, res) => {
    let collection = currentUser;

    //Pulls all of the data in the flightData collection
    let cursor = db.collection(collection).find();
    cursor.toArray((err, results) => {
        //Handle errors
        results.sortBy((flight) => { 
            return flight.date.momentObj 
        });
        res.send(results); 
    });
});

//Adds a sortBy function, which uses a Schwartzian Transform, to the Array prototype
//This function was inspired by stackoverflow user Phrogz
(() => {
  if (!Array.prototype.sortBy) Array.prototype.sortBy = sb;

  function sb (f) {
    for ( let i = this.length; i; ){
      var o = this[--i];
      this[i] = [].concat(f.call(o,o,i),o);
    };

    this.sort((a,b) => {
      for ( let i=0, len=a.length; i<len; ++i){
        if ( a[i]!=b[i] ) return a[i]<b[i] ? - 1 : 1;
      }
      return 0;
    });

    for ( let i=this.length; i; ){
      this[--i]=this[i][this[i].length-1];
    };
    return this;
  };
})();


//Pulls a range of flight data from current user's collection of logged flights
app.post('/data/flightlog/range', (req, res) => {
    let collection = currentUser;
    let fromDate = req.body.fromDate.momentObj;
    let toDate = req.body.toDate.momentObj;

    let cursor = db.collection(collection).find({
        "date.momentObj" : {
            $gte: fromDate,
            $lt : toDate
        }
    });

    cursor.toArray((err, results) => {
        results.sortBy((flight) => { 
            return flight.date.momentObj 
        });
        res.send(results);
    });
})

//Connect to database
mongodb.MongoClient.connect('mongodb://' + username + ':' + password + '@ds155820.mlab.com:55820/test-land', (err, database) => {
    db = database;
    if (err) console.log(err);
    console.log('DB connected'); 
});

//##Routes for the SPA. Will handle the user refreshing the page, by resending the same page to Angular##
app.get('/sign-up', (req, res) => {
  res.sendFile(distDir);
});

app.get('/log-in', (req, res) => {
  res.sendFile(distDir);
});

app.get('/main-menu', (req, res) => {
  res.sendFile(distDir);
});

app.get('/add-flight', (req, res) => {
  res.sendFile(distDir);
});

app.get('/flight-log', (req, res) => {
  res.sendFile(distDir);
});

//#########ERROR HANDLERS ###################

