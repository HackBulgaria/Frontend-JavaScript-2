'use strict'

var TodoApp = (function() {

	var init = function(){
		TaskModel.read(function(tasks){
			TasksView.update(tasks);
		})
	}

	// adds a new task to the collection
	var addTask = function(taskName) {	
		TaskModel.create({
			name: taskName,
			finished: false
		},function(tasks){
			TasksView.update(tasks);
		})
	};


	// updates the task
	var finishTask = function(task) {

		task.finished = !task.finished;

		TaskModel.update(task._id, task,function(tasks){
			TasksView.update(tasks);
		})
	};

	var removeTask = function(task) {
		TaskModel.remove(task._id,function(tasks){
			TasksView.update(tasks);
		})
	}
/*
	var moveTask = function(fromIndex, toIndex){

		// get the el and remove it from tasks 
		var elToMove = tasks.splice(fromIndex, 1)[0];
		
		// push it to the new index
		tasks.splice(toIndex, 0, elToMove);

	}
*/

	return {
		addTask: addTask,
		finishTask: finishTask,
		removeTask: removeTask,
		init: init
	}
})();