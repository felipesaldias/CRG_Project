'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExerciseSchema = Schema({
    //Invetigar division/subcategoria de los ejercicios
    name: String,
    region: String,
    group: String,
    ext: String,
    
});

module.exports = mongoose.model('exercise',ExerciseSchema);