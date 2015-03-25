# Week 1 Task 3: Jade Blog

## Init Stuff
You know the drill, files, dependencies, server. If not check out the hello node task.

You should end up with something like this:
```
. 
├── server.js
├── package.json
├── node_modules
│   └── express
├── .bowerrc
├── bower.json
└── public
    ├── index.html
    └── lib
        └── fontawesome
```

## Jade What

There are a lot of template engines out there. Most of them are plain old html with additional patterns or masks that indicate where variables should be inserted, conditional statements, loops etc...

One of the biggest things that differentiate jade is that it goes one step further and get's rid of the unneeded characters and leaves only the most important. 

so this:
```html
<div class="className" id="idName" attr="1"></div>
```
translates to this:
```jade
div.className#idName(attr="1")
```

div's, since we all use them a lot in jade we can ommit them. So this also works: 
```jade
.className#idName(attr="1")
```

You may notice that this jade statemet looks very much like a css selector.

To top things off you don't need closing tags. The structure is defined, well with a structure.

Here is a more complex example:
```jade
.className#idName(attr="1",style="border: 1px;")
    span.class1.class2#id1 Some Text Here
    p.
        Text positioned bellow a tag with a "." at the end
        and with additional identation will be inserted as is
        no matter on how many lines. Of course this works great for
    script(type="text/javascript").
        var javaScript = "Code Here";
        function forReal(){
            alert("I am not kidding!");
        }
```

Compiled will produce the following html:
```html
<div class="className" id="idName" attr="1" style="border: 1px;">
    <span class="class1 class2" id="id1">Some Text Here</span>
    <p>
        Text positioned bellow a tag with a "." at the end
        and with additional identation will be inserted as is
        no matter on how many lines. Of course this works great for
    </p>
    <script type="text/javascript">
        var javaScript = "Code Here";
        function forReal(){
            alert("I am not kidding!");
        }
    </script>
</div>
```

Ok now that we know what jade code looks like and how to translate it to and back from html (if not check the jade lang site. It has a good documentation and examples)

## Install Jade

Since we already inited our project and have installed and set up express we can just
```sh
npm install --save jade
```

To make express play nice with jade just after
```javascript
// configure the app
app.use(express.static('public'));
```

add
```javascript
app.set('view engine', 'jade');
```