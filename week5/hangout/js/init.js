'use strict'

$(document).ready(function(){
	// init stuff
	$("ul#tasks-list").sortable();

	$("#new-task-form").submit(function(){

		var taskName = $("#task-name").val();
		$("#task-name").val("")

		TodoApp.addTask(taskName);
		TodoApp.displayList();

		event.preventDefault();
	})
})