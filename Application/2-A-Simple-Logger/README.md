# Problem 2 - A simple logger

In a language of your choice, implement the following things:

## The interface

Make an interface, called `MyLogger` with only 1 method - `log(level, message)`

The two arguments should be:

* `level` - an integer, from 1 to 3.
* 1 means that your are logging with `INFO` level.
* 2 means that you are logging with `WARNING` level.
* 3 means that you are logging with `PLSCHECKFFS` level.
* `message` is a string, that you are logging.

There is a rule of how to make the log message, regardless where you are saving it:

```
{LOG_LEVEL_STRING}::{TIMESTAMP}::{MESSAGE}
```

For example, if we log with `level = 1`, and `message = "Hello World"`, this will produce the following line:

```
INFO::2015-02-02T01:43:19+00:00::Hello World
```

[The timestamp should be in ISO 8901 format.](http://en.wikipedia.org/wiki/ISO_8601)

Make 3 different classes, that implement the interface `MyLogger`:

## `ConsoleLogger`

The `ConsoleLogger` should log the messages directly to the console.

## `FileLogger`

The `FileLogger` should log the messages to a given file.

## `HTTPLogger`

The `HTTPLogger` shoud log the messages via a POST request to a given HTTP url.
