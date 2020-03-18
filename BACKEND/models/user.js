'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    name: String,
    rut: {type: String, unique: true, index: true },
    pass: String,
    email: String,
    phone: Number,
    type: String,
    createdAt: Date,
    updatedAt:{type: Date,default: Date.now},
    routines: [{ type: Schema.Types.ObjectId, ref: 'Routine' }]
});

module.exports = mongoose.model('user',UserSchema);