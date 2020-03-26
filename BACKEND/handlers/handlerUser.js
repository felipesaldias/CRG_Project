let User = require('../models/user');
var mongodb = require('mongodb');
var Binary = require('mongodb').Binary;
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
        //console.log(req)
        // if (req.files===null){
        //   return res.status(200).send({msg: "no vienen archivos en la peticion"})
        // }
        fs.writeFile('./files/pdf/holactm.pdf',req.file.buffer,{encode:'binary'},()=>{
          console.log("TU ARCHIVO SE GUARDO ")
        })
        console.log("EL FILE ES: " +req.file)
        //let file=req.file.buffer
        //let file=Buffer.from(req.file.buffer, 'binary')
        //console.log("   EL BUFFER Es tipo " + req.file.buffer)
        //console.log("el objeto antes de guardarse es: "+ file )
        
        User.findOneAndUpdate({ _id: req.params.id },{pdf: req.file.buffer},function (err,result){
          if(result){
            res.json({
              success: true,
              message: "se guardo el pdf en el usuario"
            });
          }
          else{
            res.status(403).send({
                msg: "su pdf no se pudo guardar en la db"
            });
          }
        });
        //console.log(req.files.file);
        //console.log(req.file)
        //return res.status(200).send((Buffer.from(req.file.buffer, 'binary')))
        //return res.status(200).send((Buffer.from(req.files.file.data, 'binary')))
      }
      getpdf (req, res){
        var file = fs.createReadStream("./files/pdf/holactm.pdf");
        file.pipe(res);
       //User.findById(req.params.id,(err,doc)=>{
        // let file=fs.readFileSync('./files/pdf/holactm.pdf','binary')
        // let file3=fs.readFileSync('./files/pdf/holactm.pdf',{encode:'binary'})
        
        // fs.writeFile('./files/pdf/holactm2.pdf',file,{encode:'binary'},()=>{
        //   console.log("TU ARCHIVO SE GUARDO ")
        // })
        // fs.writeFile('./files/pdf/holactm3.pdf',file3,{encode:'binary'},()=>{
        //   console.log("TU ARCHIVO SE GUARDO ")
        // })
        // console.log("yo soy tu file3:  "+file)
        //res.contentType("application/pdf");
        // res.setHeader('Content-Type', 'application/pdf');
        // var path= __dirname + '/files/pdf/holactm.pdf'
        //res.download(path);

        //return res.status(200).send(file3)

        // User.findOne({_id: req.params.id},(err,doc)=>{
          // let pdf=doc.pdf
          // console.log(pdf)
          // buf=Buffer.from(doc.pdf.buffer, "binary")
          // console.log(buf)
          // 
          // return res.status(200).send(doc.pdf)
          
        //})
      }
  }
  
