# A classic and an event queue

In a file called `queue.js` implement the following:

## Queue from a literal object

Using a literal object - `{}` - create an object, that behaves like a queue.

For example, if we store our queue like this:

```javascript
var queue = {
    // implementation
}
```

It should have the following methods:

* `queue.push(item)` - pushes the item to the queue
* `queue.pop()` - returns the item on top of the queue
* `queue.isEmpty()` - returns true if the queue is empty

## An Event Queue

**This is more "event bus" than "event queue"!** Use `{}` for implementation.

Create a single object, that behaves like an event queue! We can attach custom events with callbacks to them and also trigger those events.

The object should have the following __public__ methods:

* `.on(eventName, callback)` - adds the given `callback` for the given `eventName`
* `.remove(eventName)` - removes all callbacks for the given `eventName`
* `.trigger(eventName)` - fires the given `eventName` which calls all callbacks for that event

__Everything else, regarding the implementation of the event queue should be private!__

Here is an example usage:

```javascript
var queue = // implementation

queue.on("PANIC_EVENT", function() {
    console.log("PANIC_EVENT HAPPENED!")
});

queue.on("PANIC_EVENT", function() {
    console.log("PANIC_EVENT HAPPENED AGAIN!");
});
```

Now, if we call:

```javascript
queue.trigger("PANIC_EVENT");
```

This will log:

```
"PANIC_EVENT HAPPENED!"
"PANIC_EVENT HAPPENED AGAIN!"
```
