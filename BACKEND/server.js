var express = require('express')
var http = require('http')
var app = express()

app.get('/:id', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //res.status(200).send("Welcome to API REST")
  console.log(req.params)
  console.log(req.query)
  var junto2= {"params": req.params, "query": req.query}
  res.status(200).send(junto2)
  
})

app.get('/dani', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.status(200).send("hola soy la dani")
})

http.createServer(app).listen(8001, () => {
  console.log('Server started at http://localhost:8001');
});