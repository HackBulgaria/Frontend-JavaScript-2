window.onload = function() {
  var button = document.getElementById("add-task-button");
  button.onclick = function(event) {
      var input = document.getElementById("task-input");

      console.log(input.value);
  };
};
