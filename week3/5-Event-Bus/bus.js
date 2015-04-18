// IIFE - Immediately Invoked Function Expression
// design pattern in JavaScript
var bus = (function() {
  var eventTable = {};
  
  function trigger(event) {
    var events = eventTable[event] || [];

    events.forEach(function(callback) {
      callback();
    });
  }

  function remove(event) {
    delete eventTable[event];
  }

  function on(event, callback) {
    if(typeof(eventTable[event]) === "undefined") {
      eventTable[event] = [];
    }

    eventTable[event].push(callback);
  }

  return {
    "trigger": trigger,
    "on": on,
    "remove": remove
  }
})();

