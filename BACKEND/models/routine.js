'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RoutineSchema = Schema({
    date: Date,
    ejercicios: String,
    owner: {type: Schema.Types.ObjectId, ref: 'User'}

});

module.exports = mongoose.model('routine',RoutineSchema);