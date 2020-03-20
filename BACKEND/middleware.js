let jwt = require('jsonwebtoken');
const config = require('./config.js');

let checkToken = (req, res, next) => {
  console.log("toy en el middleware")
  let token = req.headers['x-access-token'] || ''; // Express headers are auto converted to lowercase
  console.log(token)
  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.status(400).send({
          success: false,
          message: 'Token is not valid'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(400).send({
      success: false,
      message: 'Auth token is not supplied'
    });
  }
};
let checkStaff = (req, res, next) => {
  console.log("Estamos en el middelware checkStaff y el tipo es: " + req.decoded.type);
  let type = req.decoded.type;
  if (type == "admin" || type == "nutricionista" || type == "entrenador"){
    console.log("Estamos en el middelware checkStaff y en el IF: ");
    next();
  }
  else{
    console.log("Estamos en el middelware checkStaff y en el ELSE: ");
    return res.status(400).send({
      success: false,
      message: 'you are not staff member'
    });
    
  }
}
module.exports = {
  checkToken: checkToken,
  checkStaff: checkStaff
}