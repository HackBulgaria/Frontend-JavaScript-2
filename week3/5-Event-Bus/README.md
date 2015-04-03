## An Event bus

Create a single object, that behaves like an event bus! We can attach custom events with callbacks to them and also trigger those events.

The object should have the following __public__ methods:

* `.on(eventName, callback)` - adds the given `callback` for the given `eventName`
* `.remove(eventName)` - removes all callbacks for the given `eventName`
* `.trigger(eventName)` - fires the given `eventName` which calls all callbacks for that event

__Everything else, regarding the implementation of the event bus should be private!__

Here is an example usage:

```javascript
var bus = { // implementation }

bus.on("PANIC_EVENT", function() {
    console.log("PANIC_EVENT HAPPENED!")
});

bus.on("PANIC_EVENT", function() {
    console.log("PANIC_EVENT HAPPENED AGAIN!");
});
```

Now, if we call:

```javascript
bus.trigger("PANIC_EVENT");
```

This will log:

```
"PANIC_EVENT HAPPENED!"
"PANIC_EVENT HAPPENED AGAIN!"
```
