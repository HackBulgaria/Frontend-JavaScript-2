# Week 7 : Task 1 Students CRUD

## Premise
Using what we've learned so far we are going to create a full-stack app.
We will
- create a server that provides a RESTful api following this tutorial [Build RESTful APIs with Node and Express](http://alexmilanov.com/restful-apis-node-express)
 - modify it to use a collection instead of the structure used in the tutorial.
```js
var students = [{
	id: 1,
	name: "Pesho",
	email: Gosho
}]
```
 - The endpoints should be at /api/students instead of /users
- test the API with the chrome extension [Advanced REST Client](https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo)
- Finally build a front-end client using what we've learned with jQuery


## Cheat sheets

### Get index by id
```js
function getIndexById(collection, id){
	var docIndex = -1;
	collection.forEach(function(item, index){
		if(item["id"] === id){
			docIndex = index;
		}
	})
	return docIndex;
}
```

### jQuery API Calls
```js
// do get request with $.get
$.get("/api/students/",function(students){

})
// post, put & delete via
$.ajax({
	url: "/api/students/1", // api endpoint
	method: "put",			// method
	data: {					// data to send
		name: "Pesho",
	},
	dataType: "json"		// data type
}).done(function(result){

})