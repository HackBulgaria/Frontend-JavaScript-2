'use strict'

var TodoApp = (function() {

	var tasksOrder = [];

	var updateView = function(tasks){
		var orderedTasks = [];
		if(tasksOrder.length > 0){
			tasksOrder.forEach(function(taskId){
				tasks.forEach(function(task){
					if(task._id === taskId){
						orderedTasks.push(task);
					}
				})
			})
		} else {
			orderedTasks = tasks;
		}
		TaskModel.setTasks(orderedTasks);
		TasksView.update(orderedTasks);
	}

	var updateOrder = function(cb){

		if(!cb){
			cb = function(){};
		}

		var tasks = TaskModel.getTasks();
		tasksOrder = [];
		tasks.forEach(function(task,index){
			tasksOrder.push(task._id);
		})
		$.ajax({
			url: "/api/settings/55380aad1e7726c31b03670b",
			data: {
				tasksOrder: tasksOrder
			},
			success: function(){
				cb();
			},
			method: "PUT"
		});
	}

	var init = function(){
		// load the order
		$.get("/api/settings/55380aad1e7726c31b03670b",function(settings){
			if(settings)
				tasksOrder = settings.tasksOrder || [];
			// load the tasks
			TaskModel.read(updateView)
		});
	}

	// adds a new task to the collection
	var saveTask = function(task) {	
		if(typeof task._id === "undefined") {
			TaskModel.create(task, function(tasks){
				updateOrder(function(){
					updateView(tasks);
				})
			})
		} else {
			TaskModel.update(task._id, task, updateView);
		}
	};

	// updates the task
	var finishTask = function(task) {

		task.finished = !task.finished;

		TaskModel.update(task._id, task,updateView)
	};

	var removeTask = function(task) {
		TaskModel.remove(task._id, function(tasks){
			updateOrder(function(){
				updateView(tasks);
			})
		})
	}

	var moveTask = function(fromIndex, toIndex){

		var tasks = TaskModel.getTasks();

		// get the el and remove it from tasks 
		var elToMove = tasks.splice(fromIndex, 1)[0];
		
		// push it to the new index
		tasks.splice(toIndex, 0, elToMove);

		TaskModel.setTasks(tasks);

		updateOrder();

	}

	return {
		saveTask: saveTask,
		finishTask: finishTask,
		removeTask: removeTask,
		moveTask: moveTask,
		init: init
	}
})();