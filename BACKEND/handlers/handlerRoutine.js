var mongoose = require('mongoose')
let Routine = require('../models/routine');
let Exercise = require('../models/exercise');


module.exports = class HandlerRoutine{
    constructor() {
        console.log('Nueva instancia Routine');
        
    }
    
    create(req,res){
        var routine = new Routine();
        
        routine.routine= req.body.routine
        console.log(JSON.stringify(routine))
        routine.save()
                    
                    
                    // var EOC= new ExerciseOnCalendar();
                    // console.log(EOC)
                    // let arr=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
                    // let front_rut=req.body.routine
                    // arr.map((day)=>{
                    //     routine.routine[day]= front_rut[day].map((ex)=>{
                    //         let mappedExercise = {
                    //                         ...ex,
                    //                         exercise: mongoose.mongo.ObjectId(ex.exercise)
                    //                     }
                    //                     console.log(mappedExercise)
                    //         return mappedExercise
                    //     })
                    // })
        //routine.owner = req.param.id;
        //routine.routine = params;
        //console.log(JSON.stringify(req.body));
        //console.log("");
        //console.log(JSON.stringify(routine));

        // let mappedRoutine = req.body.routine.map((day)=>{
        //         let mappedDay = day.map((ex)=>{
        //                 let mappedExercise = {
        //                         ...ex,
        //                         _id: mongoose.mongo.ObjectId(ex.exercise)
        //                     }
        //                     return mappedExercise
                    
        //                 })
        //                 return mappedDay
        //             })
        res.status(200).send({
            msg: "success"
        });
    }
    create2(req,res){
        var routine = new Routine();
        
        routine.routine= req.body.routine
        console.log(JSON.stringify(routine))
        routine.save()
                    
                    
                    // var EOC= new ExerciseOnCalendar();
                    // console.log(EOC)
                    // let arr=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
                    // let front_rut=req.body.routine
                    // arr.map((day)=>{
                    //     routine.routine[day]= front_rut[day].map((ex)=>{
                    //         let mappedExercise = {
                    //                         ...ex,
                    //                         exercise: mongoose.mongo.ObjectId(ex.exercise)
                    //                     }
                    //                     console.log(mappedExercise)
                    //         return mappedExercise
                    //     })
                    // })
        //routine.owner = req.param.id;
        //routine.routine = params;
        //console.log(JSON.stringify(req.body));
        //console.log("");
        //console.log(JSON.stringify(routine));

        // let mappedRoutine = req.body.routine.map((day)=>{
        //         let mappedDay = day.map((ex)=>{
        //                 let mappedExercise = {
        //                         ...ex,
        //                         _id: mongoose.mongo.ObjectId(ex.exercise)
        //                     }
        //                     return mappedExercise
                    
        //                 })
        //                 return mappedDay
        //             })
        res.status(200).send({
            msg: "success"
        });
    }
    

    index(req,res){
        async function run(){
            
                let count;
                let arr = [];
            
                if (!(count = await Routine.find())) {
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
                Routine.find().populate({path: arr.join(''),model: 'exercise'}).exec((err,routines)=>{
                    //console.log(JSON.stringify(routines))
                    res.status(200).send(routines)
                })
                
            
        }
        run()
    }
    index2(req,res){
       
        
        
        Routine.find()
        .exec()
        .then(rutinas =>{
            var rut = rutinas[0]
            let arr = [];
            for(let i = 0; i <= rut.routine.length; i++) { // length of the array (1st dimension)
                arr.push(`routine.${i}.exercise `); // constrtucting the path
              }
              console.log(arr)
              rut.populate({
                path: arr.join(''),
                model: 'exercise'
              }, (err, doc) => {
                if(err) throw err;
                else console.log(rut.bar);
              });

            //console.log(rutinas)
        }

       
        // const routine = Routine.find().populate('routine',{path: 'exercise'}).exec(function (err, routine) {
        //     if (err) return handleError(err);
        //     res.status(200).send({
        //         msg: "success",
        //         data: routine
        //     })
            
            
        //  })
         //populate({ path: 'nested', populate: { path: 'deepNested' }})
        )
    }
}