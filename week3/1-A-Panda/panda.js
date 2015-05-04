function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function Panda(name, sex) {
  this.name = name;

  if(["male", "female"].indexOf(sex) === -1) {
    sex = "female";
  }

  this.sex = sex;
  this.weight = 20;
  this.isLazy = false;
}

Panda.prototype.isMale = function() {
  return this.sex === "male";
}

Panda.prototype.isFemale = function() {
  return this.sex === "female";
}

Panda.prototype.toString = function() {
  return [this.name, "is a", this.sex, "panda which weighs", this.weight, "kg"].join(" ");
}


Panda.prototype.eat = function(bamboo) {
  this.weight += bamboo / 2;

  if(this.weight >= 80 && !this.isLazy) {
    this.name = "Lazy Panda " + this.name;
    this.isLazy = true;
  }
}

Panda.prototype.mate = function(anotherPanda) {
  var fatherName = "";
  var motherName = "";

  if(this.isMale() && anotherPanda.isFemale()) {
    fatherName = this.name;
    motherName = anotherPanda.name
  } else if(this.isFemale() && anotherPanda.isMale()) {
    fatherName = anotherPanda.name;
    motherName = this.name;
  } else {
    throw {
      "name": "PandasCannotMate",
      "message": "They love each other but sadly cannot mate ;("
    };
  }

  var babySex = ["female", "male"][getRandomInt(0, 2)];
  
  var babyName = {
    "female": motherName + " " + fatherName,
    "male": fatherName + " " + motherName
  }[babySex];
  
  return new Panda(babyName, babySex);
}

