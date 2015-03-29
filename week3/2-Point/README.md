# Point3D

We are going to model a simple 3D point, holding `x`, `y` and `z`.


With a little twist, we will make one mutable and one immutable version of that object.

## Mutable point

We want to have the following things:

* All the three components - `x`, `y` and `z` should be private with only getters - `getX()`, `getY()`, `getZ()`.
* Our point should have a method, called `move(dx, dy, dz)`, which mutates our point in the following way: `x = x + dx`, `y = y + dy`, `z = z + dz`.
* We want the `toString()` method to return a string looking like `({x}, {y}, {z})`

For example:

```javascript
var p1 = MutablePoint3d(0, 0, 0);

p1.move(0, 0, -1);

p1.getX() == 0; // true
p1.getY() == 0; // true
p1.getZ() == -1; // true

p1.toString() == "(0, 0, -1)" // true
```

## Immutable Point

The twist. We want to create a `ImmutablePoint3d` object, which behaves the same as `MutablePoint3d`.

The only difference is that the `move(dx, dy, dz)` method should return a new `ImmutablePoint3d`, instead of mutating the instance.

For example:

```javascript
var p2 = ImmutablePoint3d(0, 0, 0);

var result = p2.move(0, 0, -1);

p2.getX() == 0; // true
p2.getY() == 0; // true
p2.getZ() == 0; // true


result.getZ() == -1; // true

p2.toString() == "(0, 0, 0)" // true
result.toString() == "(0, 0, 0)" // true
```
