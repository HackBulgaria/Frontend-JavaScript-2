'use strict'

var TodoApp = (function() {

	// private vars
	var tasks = [];
	var idIndex = 0;

	// adds a new task to the collection
	var addTask = function(taskName) {	
		idIndex++;
		
		tasks.push({
			name: taskName,
			id: idIndex,
			finished: false
		})
	};

	// updates the task
	var finishTask = function(id) {
		tasks.forEach(function(task, index){
			if(task.id === id){
				task.finished = !task.finished;
				tasks[index] = task;
			}
		})
	};

	var displayList = function() {


		var tasksList = $("#tasks-list");

		// clear the contents
		tasksList.empty();

		// loop through the tasks
		tasks.forEach(function(task){

			var taskId = task.id;

			var liTask = $("<li></li>",{
				id: "task-"+taskId
			})

			var chkTaskFinish = $("<input />",{
				type: "checkbox"
			});


			if(task.finished === true){
				chkTaskFinish.attr("checked","checked");
				liTask.addClass("finished");
			}

			chkTaskFinish.click(function(){
				finishTask(taskId);
				displayList();
			})

			liTask.append(chkTaskFinish);
			liTask.append(task.name);

			// append each task
			tasksList.append(liTask);
		})
			
			// attach event listeners

	};

	// public api
	return {
		addTask: addTask,
		finishTask: finishTask,
		displayList: displayList
	};
})();