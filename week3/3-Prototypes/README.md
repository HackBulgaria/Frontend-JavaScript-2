# Augmeting existing object's prototypes

We are going to play with the prototypes of the existing `String` and `Array` prototypes.

In a file called `prototypes.js`, add the following methods to:

## String

Extend the `String` prototype by adding the following methods:

## capitalize()

Make the first letter of the string uppercase.

```javascript
"javaScript".capitalize() == "JavaScript"
```

## isBlank()

Returns `true` if the string is an empty string or containing only empty strings.

```javascript
" ".isBlank() == true
"       ".isBlank() == true
"  asda  ".isBlank() == false
```

## words() 

Splits a string into array of words.

```javascript
var words = "This is    a   very   clever   sentence!".words()
console.log(words)
// ["This", "is", "a", "very", "clever", "sentence!"]
```

## format()

The missing format function in JavaScript. Formats a string with the specified arguments.

The placeholders should be `"{}"` or named `"{name}"` curly braces.

Here are some examples:

```javascript
var name = "What?";
var result = "Hi, my name is {}. Nice to meet you {}".format(name, "Good sir!");
console.log(result);
// "Hi, my name is What?. Nice to meet you Good sir!"

```

Here is an example with named curly braces:

```javascript
var replaces = { "name": "Ivan", "language": "Bulgarian" };
var result = "Hello there {name}! Do you speak {language}?".format(replaces);
console.log(result);
// "Hello there Ivan! Do you speak Bulgarian?"
```

## Array

### head, tail and last

* `head` returns the first element of the array.
* `tail` returns the array without the first element.
* `last` returns the last element of the array.

```javascript
var a = [1, 2, 3];

a.head() == 1;
a.tail() == [2, 3]
a.last() == [3]

# We do not change the array
a == [1, 2, 3];
```

## range

Range is a method of two arguments - `start` and `end` and returns a new array of all integers between `[start, end]`

```javascript
var result = [].range(1, 10);
result == [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
## sum

Self explanatory. Returns the sum of all numbers in the array.

```javascript
[1, 2, 3].sum() == 6;
```

## product

Like sum, but returns the product of all numbers in the array

```javascript
[1, 2, 3].product() == 6;
```
## compact

Returns a new version of the array where all **falsy** values have been removed.

Here is a list of faulty values in JavaScript:

* `false`
* `0` (zero)
* `""` (empty string)
* `null`
* `undefined`
* `NaN` (a special Number value meaning Not-a-Number!)

Example:

```javascript
[false, true, 0, "", null, 5, undefined, NaN, "JavaScript"].compact() == [true, 5, "JavaScript"]
```

## take and drop

* `take` takes one argument - an integer value `n`, and returns the first `n` elements from the array
* `drop` takes one argument - an integer value `n` and returns a new array, where the first `n` elements are removed

If something overflows, either return the entire array or an empty one.

Examples:

```javascript
var a = [].range(1, 10);
a.take(3) == [1, 2, 3];
a.drop(5) == [6, 7, 8, 9, 10];
a.take(100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
a.drop(100) == [];
```

## dedup

Returns a new array where all duplicate elements are removed, leaving only one copy of each.

**Compare elements with `===`**

```javascript
[1, 1, 1, 1, 1].dedup() == [1];
```

## sample

Returns a random sample from the array.

Example:

```javascript
[1, 2, 3].sample() // can be 1
[1, 2, 3].sample() // can be 3
[1, 2, 3].sample() // can be 2
```

