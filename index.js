// Main starting point
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();
var router = require('./router');
var mongoose = require('mongoose');

// DB Setup
mongoose.connect("mongodb://localhost:auth/auth");


// App Setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*'}));
router(app);

var port = process.env.PORT || 3090;
var server = http.createServer(app);

server.listen(port);
console.log('Server listening on: ', port);
