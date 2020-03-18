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
  if (req.decoded.type == "admin" || "entrenador" || "nutricionista" ){
    next();
  }
  else{
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