// Get the packages we need
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var expressJWT=require('express-jwt');
var jwt=require('jsonwebtoken');

// var jwt = require('jsonwebtoken');

// Connect to the MongoDB
mongoose.connect('mongodb://localhost:27017/netflix');

// Create Express application
var app = module.exports = express();

var NODE_ENV = 'development';
//Set Variables
app.set('env', process.env.NODE_ENV || 'production');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(expressJWT({secret:'check'}).unless({path:['/api/v1/login']}));


 routes = require('./routes/index')
 app.use('/api', routes);

// Use environment defined port or 3000
var port = process.env.PORT || 2000;

// Start the server
app.listen(port);
console.log('Insert getat on port ' + port);