
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

## hello world example

```jade
.container
  h1.text-success 
    i.fa.fa-child &nbsp;
    | Hello Bootstrap Shop
  p.text-warning Some useless text here
  a.btn.btn-danger Hit me!

```

## grid system basic example
```jade
.container
  .row
    .col-xs-12 one huge column
  .row
    .col-xs-6 two
    .col-xs-6 columns
  .row
    .col-xs-4 one
    .col-xs-4 two 
    .col-xs-4 three
  .row
    .col-xs-3 uno
    .col-xs-3 dos
    .col-xs-3 tres
    .col-xs-3 quatro
  .row
    .col-xs-2 a
    .col-xs-2 a
    .col-xs-2 a
    .col-xs-2 a
    .col-xs-2 a
    .col-xs-2 a
```

## grid system responsive example
```jade
.container
  .row
    .col-md-3.col-sm-4.col-xs-12 item 1
    .col-md-3.col-sm-4.col-xs-12 item 2
    .col-md-3.col-sm-4.col-xs-12 item 3
    .col-md-3.col-sm-4.col-xs-12 item 4
    .col-md-3.col-sm-4.col-xs-12 item 5
    .col-md-3.col-sm-4.col-xs-12 item 6
    .col-md-3.col-sm-4.col-xs-12 item 7
    .col-md-3.col-sm-4.col-xs-12 item 8
```