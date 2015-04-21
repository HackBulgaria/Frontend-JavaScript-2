
## Premise

Create the interface of a shop app using bootstrap and jade. 

We will need the following screens:
- index.jade - a catalogue with products
- product.jade - a view product screen
- cart.jade - view with shopping cart 



## Snippets

### jase support for express

```js
app.set('view engine', 'jade');

// routes
app.get('/', function (req, res) {
  res.render('index');
})

// listen for files: /post -> /views/post.jade
app.get("/:fileName", function(req, res, next){
  if(req.params && req.params.fileName){
    var fileName = req.params.fileName.replace(".html","");

    // if jade file exists
    if(fs.existsSync(__dirname+"/views/"+fileName+".jade")){
      res.render(fileName);
    // if post is in posts
    } else {
      next();
    }

  } else {
    next();
  }
})
```

### layout structure

- index.jade
```jade
extends layout

block content
  //- put content here
```

- layout.jade
```jade
...
  //- sidebar
  include nav.jade
... 
  //- content here
  block content
```

### bootstrap 
