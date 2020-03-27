let User = require('../models/user');
let Exercise = require('../models/exercise');
//let Routine = require('../models/routie');
const fs= require('fs')


module.exports = class HandlerUser {

    constructor() {
      console.log('Nueva instancia de HG');
    }
    
    create(req,res){
      var user = new User();
      var params = req.body;
      user.name = params.name; 
      user.rut = params.rut;
      user.pass = params.pass; 
      user.email = params.email; 
      user.phone = params.phone; 
      user.type = params.type; 
      //user.active = params.active; 
      user.createdAt= new Date();
      
      user.save((err,data) => {

        if(data){
          res.header("Access-Control-Allow-Origin", "*");
          res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
          console.log(user);
          res.json({
            success: true,
            message: user,  
            msg: "Tu usuario se agrego a la DB"
          }); 

        }
        else {
          switch (err.code){
            case 11000:
                res.json({
                  msg: "El rut ya esta registrado en la db"
                }); 

            break;
             default:
                res.json({
                  msg: "Tu usuario NO agrego a la DB",
                  error: err
                }); 
           }
          
          
        }
        
      });
      }
      index (req, res) {
        User.find(function (err, docs) {
          res.json({
            success: true,
            message: "Aqui va lista users: ",
            users: docs
          });
        });
      }
      show (req, res){
        User.findOne({rut: req.params.id }, function (err, docs){
          res.json({
            success: true,
            message: "Aqui va el perkin: ",
            user: docs
          });
        })
      }
      update(req,res){
        
        console.log(req.body);
        console.log(req.params.id);

        const ress = User.findOneAndUpdate({ _id: req.params.id },req.body,function (err,result){
          if(result){
            res.json({
              success: true,
              message: "update"
            });
          }
          else{
            res.status(403).send({
                msg: "Falló la actualización del User"
            });
          }
        });
        console.log(ress);
      }
      delete(req,res){
        User.deleteById(req.params.id,function (err,userDocument) {
            if(userDocument){
                res.json({
                    msg: `usuario rut: ${JSON.stringify(userDocument)} se eliminó`
                });
            }
            else{
                res.status(403).send({
                    msg: "No se pudo eliminar el usuario"
                });
            }
            // mongodb: { deleted: true, name: 'Fluffy', _id: '53da93b1...' }
        })
      }
      loadpdf (req, res){

        fs.writeFile(`./files/pdf/${req.params.id}.pdf`,req.file.buffer,{encode:'binary'},()=>{
          console.log("TU ARCHIVO SE GUARDO ")
        })

        User.findOneAndUpdate({ _id: req.params.id },{pdf: true},function (err,result){
          if(result){
            res.json({
              success: true,
              message: "se guardo el pdf en el usuario"
            });
          }
          else{
            res.status(403).send({
                msg: "su pdf no se pudo guardar el pdf"
            });
          }
        });
      }

      getpdf (req, res){
        console.log("el usuario que esta accediendo al getpdf es "+ req.params.id)
        var file = fs.createReadStream(`./files/pdf/${req.params.id}.pdf`);
        file.pipe(res);

      }
      setexercise(req,res){
        var exercise = new Exercise();
        var params = req.body;
        console.log(params);
      
      }
  }
  
