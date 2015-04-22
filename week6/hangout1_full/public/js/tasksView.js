'use strict'


var TasksView = (function() {

	var update = function(tasks) {

		var tasksList = $("#tasks-list");

		// clear the contents
		tasksList.empty();

		// loop through the tasks
		tasks.forEach(function(task){

			var taskId = task._id;
			var _task = task;

			var liTask = $("<li></li>");

			// finish task button
			var chkFinishTask = $("<i>&nbsp;</i>");
			chkFinishTask.addClass("finishTask fa fa-square-o");
			chkFinishTask.click(function(){
				TodoApp.finishTask(_task);
			})

			// remove task button
			var chkRemoveTask = $("<i>&nbsp;</i>");
			chkRemoveTask.addClass("removeTask fa fa-trash");
			chkRemoveTask.click(function(){
				TodoApp.removeTask(_task);
			})

			// remove task button
			var chkEditTask = $("<i>&nbsp;</i>");
			chkEditTask.addClass("removeTask fa fa-pencil");
			chkEditTask.click(function(){
				$("#task-name").val(_task.name);
				$("#task-id").val(_task._id)
			})

			if(task.finished === true){
				chkFinishTask.toggleClass("fa-square-o fa-check-square-o");
				liTask.addClass("finished");
			}
		
			// append contents to li
			liTask.append(chkFinishTask);
			liTask.append(task.name);
			liTask.append(chkRemoveTask);
			liTask.append(chkEditTask);


			// append each task
			tasksList.append(liTask);
		})
			
			// attach event listeners

	};

	return {
		update: update
	};

})()