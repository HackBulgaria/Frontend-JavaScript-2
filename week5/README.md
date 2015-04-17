# Week5 : jQuery

Before we start here is a cheat sheet for jQuery

## Selecting elements

```js
	// dom objects
	var domObject = document.getElementById("idHere");
	$( domObject )

	// select by tagname
	$( "div" )

	// select by class
	$( "span.superClass" )
	$( ".anotherClass")

	// select by id
	$( "p#ultraId" )

	// select childs
	$( "ul.list > li.list-element") 
```

## Getting and Setting

```js
	// html, text
	$("p.article").html("<h1>Article Title</h1>")
	$("textarea[name='summary']").text("Some Text Here")

	// input values
	$("input#search").val()

	// attributes
	$("img#logo").attr("src","dir.bg/logo.png")
	$("a#myLink").attr()

	// classes
	$("button#trigger").addClass("active")
	$("button#trigger").removeClass("active")
	$("button#trigger").toggleClass("active")
```

## DOM Manipulation

```js
	// removing and emptying
	$("div").remove()
	$("div").empty()

	// creating
	var input = $(document.createElement("input"));
	var item = $("<li></li>");

	// appending
	$("div#container").append($("<ul></ul>"))
	$("<span></span>").appendTo("div.withSpans")

	// prepending
	$("p.article").text("Article Text").prepend("<h1>Article Title</h1>")
```

## Event Handling

```js
	// on document ready
	$( document ).ready(function(){
		// init stuff here
	})

	// clicks
	$( "a#trigger" ).click(function(){

	})

	// multiple events
	$( "a#button" ).on("mouseenter mouseleave", function(){

	})
```

## Naming Suggestions

```js
	// wtf is done here
	$("div#container").append($("<ul></ul>").addClass("items-list").append($("<li>List Item</li>").addClass("list-item")))
	
	// better
	var divContainer = $("div#container");
	var ulItemsList = $("<ul></ul>").addClass("items-list");
	var liListItem = $("<li>List Item</li>").addClass("list-item")

	ulItemsList.append(liListItem);
	divContainer.append(ulItemsList);

	// or at least
	var container, itemsList, listItem;
```