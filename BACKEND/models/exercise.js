'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExerciseSchema = Schema({
    //Invetigar division/subcategoria de los ejercicios
    img: String,
    name: String,
    body_region: String,
    body_group: String,
    
});

module.exports = mongoose.model('exercise',ExerciseSchema);