function makeCounter() {
  return (function() {
    var count = 0;
    return function() {
      count += 1;
      return count;
    }
  }());
}

var c1 = makeCounter();
console.log(c1());
console.log(c1());

console.log("Swiching counters");

var c2 = makeCounter();
console.log(c2());
console.log(c2());

// private for object literals
// with closure
var person = 
(function() {
  var name = "Ivo";

  return {
    "getName": function() {
      return name;
    }
  }
}());

console.log(person.getName());
