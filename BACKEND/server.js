var express = require('express')
var http = require('http')
var jwt = require('jsonwebtoken')
var app = express()
var util = require('util');

var ssp=process.env.SUPER_SECRET_PASSWORD

app.get('/', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.status(200).send({mensaje: "holactm",clave:ssp})
})
app.get('/api/usersito/:token', (req, res) => {
  //console.log(req.params.token)
  var tok= validarToken(req.params.token)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //res.status(200).send({mensaje: "holactm",clave:ssp})
  return res.status(200).send({tokendesencriptado: tok,res: "TAY VALIDAO WAXO"})
})

app.get('/api/users/:token', (req, res) => {
  //console.log(req.params.token)
  var token = req.headers['authorization']
  
  var tok= validarTok(token,res)
  //res.header("Access-Control-Allow-Origin", "*");
  console.log("no sirvio de nada tu wea")
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //res.status(200).send({mensaje: "holactm",clave:ssp})
  //return res.status(200).send({tokendesencriptado: tok,res: "TAY VALIDAO WAXO"})
})

app.post('/api/login/:user/:password', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //validar que el user y la password correspondan
  var usuario={usuario: req.params.user, pass: req.params.password};
  console.log(usuario);
  //traer el objeto del usuario de la db asociado a ese rut
  /////
  // verificar si la password coincide con la que tiene el usuario en la db
  //TRUE
    //generar token
  token=generateToken(usuario);
    //Enviar el token como respuesta de la pet http
    //en el front, el debe guardarlo en el local storage
  console.log("El token del usuario "+token);
  //FALSE 
    //devolver un mensaje que diga que el user o la pass no son correctas

  
  
  res.status(200).send({mensaje: token,clave:ssp})
})

http.createServer(app).listen(8001, () => {
  console.log('Server started at http://localhost:8001');
});

function generateToken(user) {
  var u = {
   username: user.usuario,
   id: user.pass
  }
  return token = jwt.sign(u, 'password', {
     expiresIn: 60 * 60 * 24 // expires in 24 hours
  })
};
function validarTok(token,res){
  console.log(token)
  if(!token){
    console.log("toy adentro csm")
    res.status(401).send({
      error: "Es necesario el token de autenticación"
    })
    return return 
    //return
}
}

function validarToken(token){
  var desencriptado=jwt.verify(token, 'password', function(err, token) {
    if (err) {
      return res.status(401).send({
        ok: false,
        message: 'Toket inválido'
      });
    } else {
      //req.token = token
      console.log(token.username)
      return token;
      //next()
    }
  });
  return desencriptado
};