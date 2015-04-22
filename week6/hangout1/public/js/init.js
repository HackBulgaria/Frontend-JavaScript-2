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
			TodoApp.displayList();
		}
	});

	$("#new-task-form").submit(function(){

		var taskName = $("#task-name").val();
		$("#task-name").val("")

		TodoApp.addTask(taskName);
		TodoApp.displayList();

		event.preventDefault();
	})

	// link rest api here
	// get
	TodoApp.loadTasks();

	// finish -> update ->
	

})