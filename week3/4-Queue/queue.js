var queue = (function() {
  var data = [];
  
  function pop() {
    var head = data.shift();
    return head;
  }

  function push(item) {
    data.push(item);
    return item;
  }

  function isEmpty() {
    return data.length == 0;
  }
  
  return {
    "pop": pop,
    "push": push,
    "isEmpty": isEmpty
  }
})();

