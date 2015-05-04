function MutablePoint3d(x, y, z) {
  this.getX = function() {
    return x;
  }

  this.getY = function() {
    return y;
  }

  this.getZ = function() {
    return z;
  }

  this.move = function(dx, dy, dz) {
    x += dx;
    y += dy;
    z += dz;
  }
}

MutablePoint3d.prototype.toString = function() {
  return "(" + [this.getX(), this.getY(), this.getZ()].join(", ") + ")";
}


function ImmutablePoint3d(x, y, z) {
  this.getX = function() {
    return x;
  }

  this.getY = function() {
    return y;
  }

  this.getZ = function() {
    return z;
  }
}

ImmutablePoint3d.prototype.move = function(dx, dy, dz) {
  return new ImmutablePoint3d(this.getX() + dx, this.getY() + dy, this.getZ() + dz);
}

ImmutablePoint3d.prototype.toString = function() {
  return "(" + [this.getX(), this.getY(), this.getZ()].join(", ") + ")";
}

var p2 = new ImmutablePoint3d(0, 0, 0);
var result = p2.move(0, 0, -1);

console.log(p2.toString());
console.log(result.toString());

