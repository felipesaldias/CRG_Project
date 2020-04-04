// 'use strict'

// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var RoutineSchema = Schema({
//     owner: {type: Schema.Types.ObjectId, ref: 'User'},
//     date: Date,
//     routine: [[{_id:false,exercise: {type: Schema.Types.ObjectId, ref: 'Excercise'},reps: Number,sets: Number}]]
// });

// module.exports = mongoose.model('routine',RoutineSchema);



'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RoutineSchema = Schema({
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    date: Date,
    routine: {
        monday: [{_id:false,exercise: {type: Schema.Types.ObjectId, ref: 'Excercise'},reps: Number,sets: Number}],
        tuesday: [{_id:false,exercise: {type: Schema.Types.ObjectId, ref: 'Excercise'},reps: Number,sets: Number}],
        wednesday: [{_id:false,exercise: {type: Schema.Types.ObjectId, ref: 'Excercise'},reps: Number,sets: Number}],
        thursday: [{_id:false,exercise: {type: Schema.Types.ObjectId, ref: 'Excercise'},reps: Number,sets: Number}],
        friday: [{_id:false,exercise: {type: Schema.Types.ObjectId, ref: 'Excercise'},reps: Number,sets: Number}],
        saturday: [{_id:false,exercise: {type: Schema.Types.ObjectId, ref: 'Excercise'},reps: Number,sets: Number}],
        sunday: [{_id:false,exercise: {type: Schema.Types.ObjectId, ref: 'Excercise'},reps: Number,sets: Number}]
    }
});

module.exports = mongoose.model('routine',RoutineSchema);