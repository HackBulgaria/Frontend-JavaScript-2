# Problem 1 - Mask Out Words

In a programming language of your choice, implement the following function/method:

```
maskOutWords(words, text)
```

If you read type declarations well, here it is:

```haskell
maskOutWords :: [String] -> String -> String
```

Where:

* `words` is a list of words (strings)
* `text` is a string, that may contain newlines - `\n`


The function should return a new text, where each matching word from `words` is replaced by the same number of characters `*`.

Consider the following things:

* **All matching should be case insensitive!**
* Take care of words that end with `,` or `.` - they should be matached, without the punctiation.

For example, if we have the following arguments:

* `words = ["PHP"]`
* `text = "We love coding in PHP!\nThis makes us really productive"`

The result is going to be:

```
"We love coding in ***!\nThis makes us really productie"
```

Another example will be:

* `words = ["yesterday", "Dog", "food", "walk"]`
* `text = "Yesteday, I took my dog for a walk.\n It was crazy! My dog wanted only food."`

The result is going to be:

```
********, I took my *** for a ****.\n It was crazy! My *** wanted only ****."
```
