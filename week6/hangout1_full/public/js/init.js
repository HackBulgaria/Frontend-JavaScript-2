'use strict'

$(document).ready(function(){
	// init stuff
	
	$("ul#tasks-list").sortable({
		start: function(event, ui) {
			var fromIndex = ui.item.index();
			ui.item.data('fromIndex', fromIndex);
		},
		update: function (event, ui) {
			var fromIndex = ui.item.data('fromIndex');
			var toIndex = ui.item.index();
			TodoApp.moveTask(fromIndex, toIndex);
			
		}
	});


	$("#new-task-form").submit(function(){

		var taskName = $("#task-name").val();
		$("#task-name").val("")

		var task = {
			name: taskName
		};

		if($("#task-id").val() !== ""){
			task._id = $("#task-id").val();
			$("#task-id").val("");
		}

		TodoApp.saveTask(task);

		event.preventDefault();
	})

	TodoApp.init();

	

})