const express = require('express');
const bodyParser = require('body-parser');
let config = require('./config');
let middleware = require('./middleware');
var mongoose = require('mongoose');
var HandlerGenerator = require('./handlers/handlers');
var HandlerUser = require('./handlers/handlerUser');
var cors = require('cors');

let app = express();

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/crg',{useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=>{
            console.log("conexión realizada");
        })
        .catch(err => console.log(err));


// Starting point of the server
function main () {
   // Export app for other routes to use
  let handlers = new HandlerGenerator();
  let handlerUser = new HandlerUser();
  const port = config.port || 8000;
  app.use(bodyParser.urlencoded({ // Middleware
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(cors());
  // Routes & Handlers
  app.post('/login', handlers.login);
  app.post('/users', handlerUser.create);
  //app.get('/users', handlerUser.index);
  //app.get('/users/:id', handlerUser.show);
  //app.post('/exercises', handlerExercise.create);
  //app.get('/exercises', handlerExercise.index);
  //app.get('/exercises/:id', handlerExercise.show);
  //app.post('/routine', handlerRoutine.create);
  //app.get('/:user/routine', handlerRoutine.index);
  //app.get('/routine/:id', handlerRoutine.show);
  //app.post('/exercises', handlerExcercise.create);
  app.get('/', middleware.checkToken, handlers.index);
  app.listen(port, () => console.log(`Server is listening on port: ${port}`));
}

main();