var mongoose = require('mongoose')
let Routine = require('../models/routine');
let Exercise = require('../models/exercise');


module.exports = class HandlerRoutine{
    constructor() {
        console.log('Nueva instancia Routine');
        
    }
    
    create(req,res){
        var routine = new Routine();
        var user = req.params.id
        routine.owner = user
        
        routine.routine= req.body.routine
        console.log(JSON.stringify(routine))
        routine.save()
        res.status(200).send({
            msg: "success"
        });
    }
    
    index(req,res){
        
        async function run(id){
            
                let count;
                let arr = [];

            
                if (!(count = await Routine.find({owner: id}))) {
                  return;
                }
                var cantidades = {
                    monday: 0,
                    tuesday: 0,
                    wednesday: 0,
                    thursday: 0,
                    friday: 0,
                    saturday:0 ,
                    sunday: 0
                }
                
                for (var i in count ) {
                    for (var j in cantidades){ 
                        if(count[i].routine[j].length > cantidades[j] ){ 
                            cantidades[j] = count[i].routine[j].length
                        }
                    }
                }
                for(var j in cantidades){
                    for(var i = 0; i < cantidades[j]; i++){
                        arr.push(`routine.${j}.${i}.exercise `);
                    }
                }
                //console.log(arr)
                Routine.find({owner: id}).populate({path: arr.join(''),model: 'exercise'}).exec((err,routines)=>{
                    //console.log(JSON.stringify(routines))
                    res.status(200).send(routines)
                })
                
            
        }
        run(req.params.id)
    }
}
    