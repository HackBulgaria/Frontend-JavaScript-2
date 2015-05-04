# A set of classes that generate HTML

We are going to implement a set of different classes that takes data and renders as HTML.

We are going to combine that into a `Page` class, which will render the entire HTML.

* Each class is going to have a common interface of the `render()` method, which returns a string, representing the rendered HTML.
* Some of the classes are going to be containers, having an `addChild()` method - to add different components as their children.
* **Each level of nesting should be indented with 2 spaces!**

## The Paragraph class

Here is an example usage:

```javascript
var p = new Paragraph("Some text here");
p.render() == "<p>Some text here</p>";
```

## The Div class

`Div` will be a container and for the case, our only container.

**The `addChild` method should return `this` in order to have chaining. Check the page example for more info.**

Here is an example usage:

```javascript
var div = new Div();
div.addChild(new Paragraph("I am inside that div"));
div.addChild(new Paragraph("I am inside that div too"));

div.render() ==
"<div>
  <p>I am inside that div</p>
  <p>I am inside that div too</p>
</div>"
```

If we render a div with no children:

```javascript
var div = new Div();
div.render() == "<div></div>";
```

We can also nest divs:

```javascript
var div1 = new Div();
var div2 = new Div();

div1.addChild(div1);

div1.render() ==
"
<div>
  <div></div>
</div>
"
```

## The Table class

Our table class can accept a dictionary, with the following format:

```javascript
{
  "column_name1": [column values, ...],
  "column_name2": [colun values, ...]
}
```

Also, our table class can accept a list, with the following format:

**Consider the first element the row with the name of the columns.**

```javascript
[ ["Column1", "Column2"], 
  ["data1,    "data2"], ...
]
```

Here are examples:

```javascript
var tableData = {
  "name": ["Ivo", "Rado", "Maria"],
  "age": [22, 24, 22]
}


var table = new Table(tableData);

table.render() ==
"
<table>
  <thead>
    <tr>
      <th>name</th>
      <th>age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ivo</td>
      <td>22</td>
    </tr>
    <tr>
      <td>Rado</td>
      <td>24</td>
    </tr>
    <tr>
      <td>Maria</td>
      <td>22</td>
    </tr>
  </tbody>
</table>
"
```

The same goes with list data:

```javascript
var tableData = [ ["name", "age"], ["Ivo", 22], ["Rado", 24], ["Maria", 22] ];

var table = new Table(tableData);
table.render() == 
"
<table>
  <thead>
    <tr>
      <th>name</th>
      <th>age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ivo</td>
      <td>22</td>
    </tr>
    <tr>
      <td>Rado</td>
      <td>24</td>
    </tr>
    <tr>
      <td>Maria</td>
      <td>22</td>
    </tr>
  </tbody>
</table>
"
```

## Rendering everything in a page

We should have a `Page` class which takes a root element and reners everything from it.

Here is an example:

```javascript
var p = new Paragraph("Rolling in the deep");
var div = new Div();

div
  .addChild(new Div())
  .addChild(new Div())
  .addChild(p);

var page = new Page(div);

page.render() ==
"
<div>
  <div></div>
  <div></div>
  <p>Rolling in the deep</p>
</div>
"

```
