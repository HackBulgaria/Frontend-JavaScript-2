'use strict'

var TodoApp = (function() {

	// private vars
	var tasks = [];


	var loadTasks = function(){
		// empty the current list
		tasks = [];
		// add tasks from api
		$.get("http://localhost:3000/api/tasks", function(data){
			tasks = data.list;
			displayList();
		})
	}

	// adds a new task to the collection
	var addTask = function(taskName) {	
		$.ajax({
			url: "/api/tasks/",
			data: {
				name: taskName,
				finished: false
			},
			success: function(){
				loadTasks();
			},
			method: "POST"
		});
	};

	// updates the task
	var finishTask = function(id) {

		var finished = false;
		tasks.forEach(function(task, index){
			if(task._id === id){
				finished = !task.finished;
				tasks[index] = task;
			}
		})

		$.ajax({
			url: "/api/tasks/"+id,
			data: {
				finished: finished
			},
			success: function(){
				loadTasks();
			},
			method: "PUT"
		});
	};

	var removeTask = function(id) {
		$.ajax({
			url: "/api/tasks/"+id,
			success: function(){
				loadTasks();
			},
			method: "DELETE"
		});
	}

	var moveTask = function(fromIndex, toIndex){

		// get the el and remove it from tasks 
		var elToMove = tasks.splice(fromIndex, 1)[0];
		
		// push it to the new index
		tasks.splice(toIndex, 0, elToMove);

	}

	var displayList = function() {

		var tasksList = $("#tasks-list");

		// clear the contents
		tasksList.empty();

		// loop through the tasks
		tasks.forEach(function(task){

			var taskId = task._id;

			var liTask = $("<li></li>");

			// finish task button
			var chkFinishTask = $("<i>&nbsp;</i>");
			chkFinishTask.addClass("finishTask fa fa-square-o");
			chkFinishTask.click(function(){
				finishTask(taskId);
			})

			// remove task button
			var chkRemoveTask = $("<i>&nbsp;</i>");
			chkRemoveTask.addClass("removeTask fa fa-trash");
			chkRemoveTask.click(function(){
				removeTask(taskId);
				displayList();
			})

			if(task.finished === true){
				chkFinishTask.toggleClass("fa-square-o fa-check-square-o");
				liTask.addClass("finished");
			}
		
			// append contents to li
			liTask.append(chkFinishTask);
			liTask.append(task.name);
			liTask.append(chkRemoveTask);

			// append each task
			tasksList.append(liTask);
		})
			
			// attach event listeners

	};

	// public api
	return {
		addTask: addTask,
		finishTask: finishTask,
		moveTask: moveTask,
		displayList: displayList,
		loadTasks: loadTasks
	};
})();