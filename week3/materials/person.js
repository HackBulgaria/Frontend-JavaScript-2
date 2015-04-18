 var person = { 
  "name": "Ivo",
  "age": 24
 };


// "closure" -> "обвивка"

function createPerson(name, age) {
  return {
    "getName": function() {
      return name;
    },
    "getAge": function() {
      return age;
    }
  }

}

var ivo = createPerson("ivo", 22);
ivo.name = ivo.getName();
ivo.name = "Rado";
console.log(ivo);

