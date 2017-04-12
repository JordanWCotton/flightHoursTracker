const mongoose = require('mongoose');
const mongodb = require('mongodb');

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

mongoose.model('User', userSchema);