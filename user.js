const mongoose = require('mongoose');
const mongodb = require('mongodb'); 
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const secret = 'testSecret';

const userSchema = new mongoose.Schema({
    name: String,
    email:  {
        type: String,
        unique: true
    },
    hash: String,
    salt: String
});

userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 512, 'sha512').toString('hex');
};

//For future use//
userSchema.methods.generateJwt = function () {
    let expir = new Date ();
    expir.setDate(expir.getDate() + 7);

    return jwt.sign({
        email: this.email,
        name: this.name,
        exp: pareInt(expir.getTime() / 1000),
    }, secret)
};

mongoose.model('User', userSchema);