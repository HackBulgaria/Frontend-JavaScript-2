"use strict"

// dependancies
var express = require('express')
var fs = require("fs");
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// restify
var restify = require("iblokz-node-restify");
var restMap = require("./data/restMap.json");

// create app
var app = express()

// connect to db
var db = mongoose.connect("mongodb://localhost/week8-subscriptions");

// load model
restify.loadModel(restMap, db);

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

	// intercept OPTIONS method
	if ('OPTIONS' == req.method) {
	  res.send(200);
	}
	else {
	  next();
	}
});

// configuration and middleware 
app.use(express.static('public'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());


// routes
app.get('/', function (req, res) {
  res.render('index');
})

// init routes
restify.initRoutes(app,restMap,{},db);

// set up server
var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})