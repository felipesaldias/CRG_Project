let User = require('../models/user');

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
        console.log(typeof(err.code))//.slice(0, 18))
        if(data){
          console.log(user);
          res.header("Access-Control-Allow-Origin", "*");
          res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
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
    index(req,res){
      //traer de mongo el usuario que corresponde al rut que viene en el token
      var tokendec = req.decoded
      console.log(req.decoded);
      const type= tokendec.type;
      const rut= tokendec.rut;
      console.log("el usuario "+rut+" de tipo: "+type+"quiere saber sus datos");
      res.json({
        user: {
          rut: rut,
          type: type
        } ,
        msg: " "
      }); 
    }
  }
  