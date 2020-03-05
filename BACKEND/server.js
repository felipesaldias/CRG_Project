const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
let jwt = require('jsonwebtoken');
let config = require('./config');
let middleware = require('./middleware');
var mongoose = require('mongoose');


dotenv.config();

mongoose.Promise = global.Promise;

let app = express();
mongoose.connect('mongodb://localhost:27017/crg',{useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=>{
            console.log("conexión realizada");
        })
        .catch(err => console.log(err));

var HandlerGenerator = require('./handlers');

// Starting point of the server
function main () {
   // Export app for other routes to use
  console.log(process.env.PORT);
  
  let handlers = new HandlerGenerator();
  const port = process.env.PORT || 8000;
  app.use(bodyParser.urlencoded({ // Middleware
    extended: true
  }));
  app.use(bodyParser.json());
  // Routes & Handlers
  app.post('/login', handlers.login);
  app.post('/saveUser', handlers.saveUser);
  app.get('/', middleware.checkToken, handlers.index);
  app.listen(port, () => console.log(`Server is listening on port: ${port}`));
}

main();