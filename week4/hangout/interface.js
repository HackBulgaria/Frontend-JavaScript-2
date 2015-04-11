// s - query
// do something with elements

s(document).on("DOMContentLoaded", function() {
  console.log("DOM Loaded");

  var container = s("#container"),
        lists = s("#lists"),
        hideButton = c("button"),
        showButton = c("button");

  hideButton
    .addClass("btn")
    .attr("id", "hide-button")
    .text("Hide")
    .appendTo(container);

  showButton
    .addClass("btn")
    .attr("id", "show-button")
    .text("Show!")
    .appendTo(container);

  s("button").on("click", function(event) {
    console.log(this);
    console.log(s(this).attr("id"));
    var id = s(this).attr("id");

    if(id === "show-button") {
      lists.show();
    } else if(id === "hide-button") {
      lists.hide();
    }
  });
});
