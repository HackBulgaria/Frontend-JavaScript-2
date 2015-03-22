"use strict"

// dependancies
var express = require('express')
var fs = require("fs");
var posts = require("./posts.json");

// create app
var app = express()


// configuration and middleware 
app.use(express.static('public'));
app.set('view engine', 'jade');


// routes
app.get('/', function (req, res) {
  res.render('index', {posts: posts});
})

// listen for files: /post -> /views/post.jade
app.get("/:fileName", function(req, res, next){
  if(req.params && req.params.fileName){
    var fileName = req.params.fileName.replace(".html","");

    // if jade file exists
    if(fs.existsSync(__dirname+"/views/"+fileName+".jade")){
      res.render(fileName);
    // if post is in posts
    } else if (posts[fileName]) {
      res.render("post", {post: posts[fileName]});
    // else continue
    } else {
      next();
    }

  } else {
    next();
  }
})



// set up server
var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})