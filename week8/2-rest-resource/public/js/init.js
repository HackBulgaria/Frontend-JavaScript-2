$(document).ready(function(){
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