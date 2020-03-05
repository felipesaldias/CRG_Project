'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExerciseSchema = Schema({
    //Invetigar division/subcategoria de los ejercicios
    name: String,
    body_region: String,
    body_group: String,
    body_part: String

});

module.exports = mongoose.model('User',UserSchema);