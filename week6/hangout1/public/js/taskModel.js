"use strict"

var TaskModel = (function() {

	// private vars
	var tasks = [];

	var getTasks = function(){
		return tasks;
	}

	var create = function(task, cb){

		$.ajax({
			url: "/api/tasks/",
			data: task,
			success: function(){
				read(cb);
			},
			method: "POST"
		});

	}

	var read = function(cb){
		// empty the current list
		tasks = [];
		// add tasks from api
		$.get("http://localhost:3000/api/tasks", function(data){
			tasks = data.list;
			cb(tasks);
		})
	}

	var update = function(id, task, cb){
		$.ajax({
			url: "/api/tasks/"+id,
			data: task,
			success: function(){
				read(cb)
			},
			method: "PUT"
		});
	}

	var remove = function(id, cb){
		$.ajax({
			url: "/api/tasks/"+id,
			success: function(){
				read(cb)
			},
			method: "DELETE"
		});
	}

	return {
		getTasks: getTasks,
		create: create,
		read: read,
		update: update,
		remove: remove
	}
})();
