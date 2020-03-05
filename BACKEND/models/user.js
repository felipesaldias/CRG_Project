'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    name: String,
    pass: String,
    email: String,
    phone: Number,
    type: String,
    active: Boolean
});

module.exports = mongoose.model('User',UserSchema);