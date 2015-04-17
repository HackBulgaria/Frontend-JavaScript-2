# Week 5 : Task 2 : Todo CRUD App

## Reference
- http://learn.jquery.com/code-organization/concepts/
- http://contribute.jquery.org/style-guide/js/

## What is a collection

```js
var task = {
  id: 25,
  name: "Do the dishes"
  finished: false
}

var tasks = [
  {
    id: 15,
    name: "Get some groceries",
    finished: true
  },
  {
    id: 20,
    name: "Call grandma",
    finished: false
  },
  {
    id: 25,
    name: "Do the dishes"
    finished: false
  }
]
```

## TodoApp Module

```js
var TodoApp = (function() {
  // private vars
  var tasks = [];
  var index = 0;

  // store the reference with the jQuery selectors here
  var refs = {
    addTask: "input#addTask",
    container: "#container"
  }

  var addTask = function(taskName) {
    // add to tasks
  };

  var finishTask = function(id) {
    // update task
  };

  var displayList = function(container) {
    // clear the contents
    // loop through the tasks
    // append each task
  };

  // public api
  return {
    createTask: createTask,
    finishTask: displayList,
    displayList: displayList
  };
})();

// access via
TodoApp.createTask("Do the dishes")

```