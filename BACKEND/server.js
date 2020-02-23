var express = require('express')
var http = require('http')
var app = express()

app.get('/', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.status(200).send("Welcome to API REST")
})

http.createServer(app).listen(8001, () => {
  console.log('Server started at http://localhost:8001');
});