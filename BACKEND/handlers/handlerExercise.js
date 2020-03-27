let Exercise = require('../models/exercise');
const fs= require('fs')

module.exports = class HandlerExercise {

    constructor() {
        console.log('Nueva instancia de HandlerExercise');
      }

    create(req,res){

        var exercise = new Exercise();
        let extension = req.file.mimetype.replace('image/',"")
        var params = req.headers;
        exercise.name = params.name;
        exercise.body_region = params.region;
        exercise.body_group = params.group;

        //console.log(req.file.mimetype.replace('image/',""))
        //console.log("este es tu header "+params+"con name "+ params.name +", "+ params.region)
        
        exercise.save((err,data) => {
            console.log(data._id)
            fs.writeFile(`./files/pdf/${data._id}.${extension}`,req.file.buffer,{encode:'binary'},()=>{})

            
        });

        // exercise.name = params.name;
        // exercise.body_region = params.region;
        // exercise.body_group = params.group;
        // exercise.img = params.image,


        //console.log(exercise);

        
    }
}