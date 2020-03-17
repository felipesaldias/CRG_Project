let jwt = require('jsonwebtoken');
let config = require('../config');

module.exports = class HandlerGenerator {

    constructor() {
      console.log('Nueva instancia de HG');
    }
    login (req, res) {
      console.log("paso")
      let rut = req.body.rut;
      let password = req.body.password;
      // For the given username fetch user from DB
      let mockedUsername = 'admin';
      let mockedPassword = 'password';
      let usertype= "administrador";
  
      if (rut && password) {
        if (rut === mockedUsername && password === mockedPassword) {
          let token = jwt.sign({rut: rut, type: usertype},
            config.secret,
            { expiresIn: '24h' // expires in 24 hours
            }
          );
          // return the JWT token for the future API calls
          res.json({
            success: true,
            message: 'Authentication successful!',
            token: token
          });
        } else {
          res.status(403).send({
            success: false,
            message: 'Incorrect username or password'
          });
        }
      } else {
        res.status(400).send({
          success: false,
          message: 'Authentication failed! Please check the request'
        });
      }
    }

    index (req, res) {
      res.json({
        success: true,
        message: 'Index page',
        tokendecoded: req.decoded
      });
    }

  }
  