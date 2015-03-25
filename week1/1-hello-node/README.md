# Hello Node
To start off let's create our directory structure and set up a new hello world project.

## Starting File Structure
```sh
# in unix you can create it in 1 line:
$ mkdir -p ~/Projects/frontendjs/week1/hello-node

# enter the project folder
$ cd ~/Projects/frontendjs/week1/hello-node

# also creating a file is easy
$ touch server.js
```

The file structure should look something like this:
```
.
└── Projects
    └── frontendjs
        └── week1
            └── hello-node
                └── server.js
```

## Inits and Dependencies

Let's init our configuration file and fetch the modules we need. 

We will use [npm](https://www.npmjs.com/) (Node Package Manager) for that:

```sh
# init the project. When prompted leave the defaults
$ npm init
```
This will produce *package.json* which holds info about the project and it's dependencies. 

Speaking of which our dependency for this project would be [express](http://www.expressjs.com).

```
# installs the express module to the ./node_modules folder
# --save adds it to the dependencies in package.json
$ npm install --save express
```

## Hello Express

Open server.js and add the following code:

```javascript
"use strict"

// require the dependencies
var express = require('express');

// declare the app
var app = express();

// TODO: configure the app

// add the routes
app.get('/', function (req, res) {
  res.send('Hello World!');
})

// launch the server
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

})

```

Next run the example with *node* and check the result at http://localhost:3000/

```sh
$ node server.js
```

Nice we have running our first node server. Oh wait wasn't this a front-end course. 

## Go Public

With our example above we set up a server that prints out "Hello World" everytime someone opens the base url. In order to be able to serve different *static* files such as htmls, styles, images we eighter need to add another route for each or we can just use the middleware express graciously provided.

Just add the following code in the "configure the app section":
```javascript
// configure the app
app.use(express.static('public'));
```

Next let's create the public folder, in it an index.html file.
```sh
# Look ma, all in 1 line
$ mkdir public; touch public/index.html
```

Also add the hello world message there:
```html
<!-- public/index.html -->
<h1>Hello World!</h1>
```

And remove or comment the old route in *server.js* so that it doesn't conflict with *index.html*
```javascript
// add the routes
/*app.get('/', function (req, res) {
  res.send('Hello World!');
})*/
```

Save, restart and check the browser again.

Well basically the same message. Shall we spice things up a bit.

## Bower up

If you remember we used [npm](www.npmjs.com) to manage our dependencies for the server.

Now that we have created a public folder for our front-end needs we need a front-end package manager.

[Bower](bower.io) is our app. Pretty much works the same way as npm.

Speaking of npm we will need it to install bower globally so that we can use it in all our projects.
```sh
# -g stands for gangsta
npm install -g bower
```

Next we need to configure a directory for our front-end libs. Create(touch) the file .bowerrc and add the following content to it:
```json
{
  "directory": "public/lib"
}
```

Next we be initing
```sh
# same as npm, produces bower.json
$ bower init
```

Alright let's add an awesome lib to mark our first steps in bower.
```sh
# adds the lib to public/lib and saves the dependency to bower.json
$ bower install --save fontawesome
```

Our directory structure should look something like this:
```
. 
├── server.js
├── package.json
└── node_modules
│   └── express
├── .bowerrc
├── bower.json
└── public
    ├── index.html
    └── lib
        └── fontawesome
```

Awesome, [Font Awesome](http://fontawesome.io/)

Add to top things off add a nice icon to compliment our message:

```html
<!-- public/index.html -->
<link rel="stylesheet" href="/lib/fontawesome/css/font-awesome.css"></link>
<h1><i class="fa fa-child"></i>Hello World!</h1>
```
