'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RoutineSchema = Schema({
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    date: Date,
    routine: [[{pos: Number,exercise: {type: Schema.Types.ObjectId, ref: 'Excercise'},reps: Number,sets: Number}]]
});

module.exports = mongoose.model('routine',RoutineSchema);