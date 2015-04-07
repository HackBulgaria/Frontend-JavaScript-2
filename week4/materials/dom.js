// PART1 - QUERING
// If you want to take an element by tag:

// ps is an array
var ps = document.getElementsByTagName("p");

for(var i = 0; i < ps.length; i += 1) {
  var p = ps[i];
  // changing the style of each paragraph
  p.style.border = "dashed 1px green";
}

// EVENTS

var button = document.getElementById("main-button");
button.onclick = function(event) {
    console.log("button was clicked");
};

// CREATING ELEMENTS
var button = document.createElement("button");
var text = document.createTextNode("I am Groot!");
button.appendChild(text);

var div = document.getElementById("the-div");
div.appendChild(button);
