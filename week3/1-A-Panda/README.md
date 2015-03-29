# We will model a Panda

In a file called `panda.js`, create a `Panda` object, which takes two arguments:

* The `name` of the panda
* The `sex` of the panda - can be `"male"` or `"female"`
* Each `Panda` should have a `weight` property, which always starts at `20`

Our `Panda` should have the following methods, attached to the `Panda`'s prototype:

* `toString()` - returns a string representation of our panda. See the examples below for how it should look like
* `isMale()` and `isFemale()` - returns true/false based on the `sex` of the Panda
* `eat(bamboo)` where `bamboo` is an integer - how much kilograms does tha panda eat. When a panda eats `x` kg of `bamboo`, it gains `x/2` weight. If the weight of the panda goes above 80, the name of the panda should be prepended with `"Lazy Panda"`. See examples below.
* `mate(anotherPanda)` - we will have a reproduction mechanism for our pandas. More on mating below.

## Basic examples for our Panda

```javascript
var ivo = new Panda("Ivo", "male");

ivo.weight == 20; // true
ivo.isMale() == true; // true
ivo.isFemale() == false; // true
ivo.toString() == "Ivo is a male panda which weights 20 kg" // true

ivo.eat(80);
ivo.weight == 60; // true

ivo.eat(80);
ivo.weight == 100; // true

ivo.name == "Lazy Panda Ivo" // true
```

## Examples for Panda Mating

When we call the `mate(anotherPanda)` method, we should get a new panda with the following criteria:

* The sex of the new panda should be a 50% chance between male and female.
* **If the panda is male**, the name of the baby panda should be: `"{Name-of-Father} {Name-of-Mother}"`
* Otherwise, it should be the other way around - `"{Name-of-Mother} {Name-of-Father}"`
* If we try to mate male with male or female with female panda, the method should throw an error `CannotMatePandas`. Research how you can throw an error from JavaScript code :)

Example:


```javascript
var ivan = new Panda("Ivan", "male");
var ivanka = new Panda("Ivanka", "female");

var baby = ivan.mate(ivanka);

// we can have one of the two options:

baby.name == "Ivan Ivanka" && baby.sex == "male" 
baby.name == "Ivanka Ivan" && baby.sex == "female"
```
