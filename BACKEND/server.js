const express = require('express');
const bodyParser = require('body-parser');
let config = require('./config');
let middleware = require('./middleware');
var mongoose = require('mongoose');
var HandlerGenerator = require('./handlers/handlers');
var HandlerUser = require('./handlers/handlerUser');
var HandlerExercise = require('./handlers/handlerExercise');
var HandlerRoutine = require('./handlers/handlerRoutine');
var cors = require('cors');

var fileUpload = require('express-fileupload');



var multer  = require('multer')

var storage = multer.memoryStorage()
var upload = multer({ storage: storage })

let app = express();

mongoose.Promise = global.Promise;

db = mongoose.connect('mongodb://localhost:27017/crg',{useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=>{
            console.log("conexión realizada");
        })
        .catch(err => console.log(err));


// Starting point of the server


function main () {
  
   // Export app for other routes to use
  let handlers = new HandlerGenerator();
  let handlerUser = new HandlerUser();
  let handlerExercise = new HandlerExercise();
  let handlerRoutine = new HandlerRoutine();
  const port = config.port || 8000;

  app.use(bodyParser.urlencoded({ // Middleware
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(cors());
  app.use(express.static('public'));
  //app.use(fileUpload({preserveExtension:true}))

  // Routes & Handlers
  app.post('/login', handlers.login);//cambiar nombre de handlers a hanlderAuth
  app.get('/login',middleware.checkToken,handlers.index); // trae el usuario del token
  app.post('/users', handlerUser.create);
  app.get('/users',middleware.checkToken,middleware.checkStaff,handlerUser.index);
  app.get('/users/:id/routine', handlerRoutine.index);
  app.get('/users/:id', handlerUser.show);
  app.put('/users/:id',handlerUser.update);
  app.delete('/users/:id',handlerUser.delete);
  app.post('/users/:id/pdf',upload.single("file"),handlerUser.loadpdf)
  app.get('/users/:id/pdf',handlerUser.getpdf)
  app.post('/exercises',upload.single("file"), handlerExercise.create)
  app.get('/exercises',handlerExercise.index)
  app.post('/users/:id/routine', handlerRoutine.create);
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