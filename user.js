const mongoose = require('mongoose');
const mongodb = require('mongodb');

const userSchema = new mongoose.Schema({
    name: String,
    email:  {
        type: String,
        unique: true
    },
    password: String
});

mongoose.model('User', userSchema);