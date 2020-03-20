let jwt = require('jsonwebtoken');
let config = require('../config');
let User = require('../models/user');

module.exports = class HandlerGenerator {

    constructor() {
      console.log('Nueva instancia de HG');
    }
    login (req, res) {
      console.log("paso")
      let rut = req.body.rut;
      let password = req.body.password;
      // For the given username fetch user from DB
     
      User.findOne({rut: rut}, function(err, user){
        console.log(user)
        if (rut && password && user) {
          if (rut === user.rut && password === user.pass) {
            let token = jwt.sign({rut: user.rut, type: user.type},
            config.secret,
            { expiresIn: '24h' // expires in 24 hours
            });
           // return the JWT token for the future API calls
            res.json({
              success: true,
              message: 'Authentication successful!',
              token: token
            });
          } 
          else {
            res.status(403).send({
              success: false,
              message: 'Incorrect username or password'
            });
          }
        }
        else {
          res.status(400).send({
            success: false,
            message: 'Authentication failed! Please check the request'
          });
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
  