var express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
var router = express.Router();
var app = express();
const port = 3000;
app.get("/", (request, response) => response.send("Hello World"));
app.listen(port, () => console.log("Listening on port 3000"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://admin:admin@conveostest.5jjij.mongodb.net/ConveosTest?retryWrites=true&w=majority',{ useNewUrlParser: true , useUnifiedTopology: true});
var routes = require('./api/routes/testRoutes');
var User = require('./api/models/testModel');
routes(app); 

const swaggerValidation = require('openapi-validator-middleware');
swaggerValidation.init('api/tests/swagger.yaml');

const jwt=require('jsonwebtoken');

app.use('/', router);