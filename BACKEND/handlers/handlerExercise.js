let Exercise = require('../models/exercise');
const fs= require('fs')

module.exports = class HandlerExercise {

    constructor() {
        console.log('Nueva instancia de HandlerExercise');
    }
    
    index(req,res){
        Exercise.find(function (err, docs) {
            res.json({
              success: true,
              message: "Aqui va lista exercises: ",
              exercises: docs
            });
          });
    }
    create(req,res){
        var exercise = new Exercise();
        let extension = req.file.mimetype.replace('image/',"")
        var params = req.headers;
        exercise.name = params.name;
        exercise.region = params.region;
        exercise.group = params.group;
        exercise.save((err,data) => {
            console.log(data._id)
            fs.writeFile(`./public/exercises/img/${data._id}.${extension}`,req.file.buffer,{encode:'binary'},()=>{})
        });
    }
}