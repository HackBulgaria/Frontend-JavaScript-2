$(document).ready(function(){

	function displayWithJade(container, fileName, data){
		return Q($.get(fileName)).then(function(jadeString){
			var renderedHtml = jade.render(jadeString, data);
			container.html(renderedHtml);
		})
	}

	function getDataFromForm(form){

		var formArray = form.serializeArray();

		var data = {};

		formArray.forEach(function(field){
			data[field.name] = field.value;
		})
		return data;
	}

	// resources
	var mag = new Resource("/api/mags");
	var sub = new Resource("/api/subs");
	var user = new Resource("/api/users");

	// queries
	mag.query().then(function(res){
		var container = $("#mags");
		var mags = res.list;

		return displayWithJade(container, "/views/mags.jade", {
			mags: mags
		});

	}).then(function(){
		$("#mags-form").on("submit", function(event){

			var data = getDataFromForm($(this));

			mag.create(data).then(function(){
				console.log("Created Successfuly!")
			})

			event.preventDefault();
		})
	
	})

	
	sub.query().then(function(res){
		var container = $("#subs");
		var subs = res.list;

		displayWithJade(container, "/views/subs.jade", {
			subs: subs
		});
	})

	user.query().then(function(res){
		var container = $("#users");
		var users = res.list;

		displayWithJade(container, "/views/users.jade", {
			users: users
		});
	})


})