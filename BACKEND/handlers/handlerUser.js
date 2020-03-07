let User = require('../models/user');

module.exports = class HandlerUser {

    constructor() {
      console.log('Nueva instancia de HG');
    }
    
    create(req,res){
      var user = new User();
      var params = req.body;
      user.name = params.name; 
      user.pass = params.pass; 
      user.email = params.email; 
      user.phone = params.phone; 
      user.type = params.type; 
      //user.active = params.active; 
      user.createdAt= new Date();
      user.save();
      console.log(user);

      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.json({
        success: true,
        message: user,  
        msg: "Tu usuario se agrego a la DB"
      }); 
    }
  }
  