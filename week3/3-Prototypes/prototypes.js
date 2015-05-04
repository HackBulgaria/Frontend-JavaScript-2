// variadic arguments
String.prototype.format = function(dict) {
  var result = this;

  if(typeof(dict) === "object") {
    Object.keys(dict).forEach(function(key) {
      result = result.replace("{" + key + "}", dict[key]);
    });
    return result;
  }

  var args = [];
  var n = arguments.length;
  var i = 0;

  for(i; i < n; i+=1) {
    args.push(arguments[i]);
  }

  var result = this;

  args.forEach(function(arg) {
    result = result.replace("{}", arg);
  });

  return result;
}

console.log("{} {} {}".format("one", "two", "three"));
console.log("Hello {name}, I am {friend}".format({
  "name": "Ivo",
  "friend": "Rado"
}));

