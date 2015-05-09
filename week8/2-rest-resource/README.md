# Week 8 Task 2 REST Resource

## Premise
Create a helper class that encapsulates ajax calls to REST resources whereby
- the constructor gets an `url` attribute. 
```js
function Resource(url){
  
}
```
- has the following methods
 - query() - calls a rest resource and returns a list of items (collection)
 - create(data) - sends a new entry (document) to the list
 - update(id, data) - updates a document by id
 - delete(id) - deletes by id
- implements and returns a promise for each method

## Usage
### Basic
```js

var student = Resource("/api/students")

student.query().then(function(result){
  console.log(result);
})

```
### Advanced
```js
  var student = new Resource("http://192.168.0.66:3000/api/students");

  var displayResult = function(res){ 
    console.log(res)

    return res;
  }

  var getId = function(data){

    var id = data._id;

    return id;
  };

  // query
  
  // create
  var data = {
    name: "Gospodin",
    email: "gospodin@gospodinoff.cc"
  };

  var newData = {
    name: "Peter"
  }
  student.query()
    .then(displayResult)
    .then(function(){
      return student.create(data);
    })
    .then(displayResult)
    .then(getId)
    .then(function(id){
      return student.update(id, newData);
    })
    .then(displayResult)
    .then(function(){
      return student.query();
    })
    .then(displayResult);

  })
```

## Dependencies
- bower - for the task itself
 - jquery
 - q#1.x
- npm - to be able to run a RESTful API to test
 - express
 - method-override
 - body-parser
 - iblokz/node-restify
 - mongoose
 - jade

## Hints
- CRUD pattern -> Create (POST), Read (GET), Update (PUT), Delete
- REST resource archtypes
 - document
 - collection
- REST endpoints
 - collection
  - /api/users GET, POST
 - document
  - /api/users/:id GET, PUT, DELETE

## Next Steps
- Use it in a previous task where you have to access RESTful APIs