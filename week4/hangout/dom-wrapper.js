// s(element) -> element/s
// element.text
// element.appendTo(anotherElement)
// element.on
// element.attr
// element.addClass()
// element.removeClass()
// element.show()
// element.hide()

// element.forEach

function hasKey(dict, key) {
    return typeof dict[key] !== "undefined";
}


function isArrayLike(object) {
  return Array.isArray(object) ||
   (typeof(object.length) !== "undefined" && typeof(object.item) !== "undefined");
}


function s(selector) {
  if(selector instanceof Element) {
    return selector;
  } else if(typeof(selector) === "string") {
    var domObjects = document.querySelectorAll(selector);

    return new Element(domObjects);
  } else if(typeof(selector) === "object") {
    return new Element(selector);
  } else {
    throw {
      "name": "Selection Error",
      "message": "Cannot select: " + selector.toString()
    };
  }
}

function c(tag) {
  var domObject = document.createElement(tag);
  return new Element(domObject);
}

function Element(domObjects) {
  this.domRepr = function() {
    if(isArrayLike(domObjects) && domObjects.length === 1) {
      return domObjects[0];
    }

    return domObjects;
  };
}

Element.prototype.text = function(text) {
  var textNode = document.createTextNode(text);
  this.domRepr().appendChild(textNode);

  return this;
};

Element.prototype.appendTo = function(container) {
  container.domRepr().appendChild(this.domRepr());
  return this;
};

Element.prototype.on = function(event, callback) {
  this.forEach(function(domElement) {
    domElement.addEventListener(event, callback);
  });

  return this;
};

Element.prototype.addClass = function(newClass) {
  this.forEach(function(domElement) {
    if(domElement.className === "") {
      domElement.className = newClass;
      return this;
    }

    var classes = domElement.className.split(" ");
    classes.push(newClass);
    domElement.className = classes.join(" ");

  });

  return this;
};


Element.prototype.removeClass = function(className) {
  var domElement = this.domRepr();
  var classes = domElement.className.split(" ");

  classes = classes.filter(function(currentClass) {
    return currentClass !== className;
  });

  domElement.className = classes.join(" ");

  return this;
};

Element.prototype.hide = function() {
  this.domRepr().style.visibility = "hidden";

  return this;
};

Element.prototype.show = function() {
  this.domRepr().style.visibility = "";

  return this;
};

// s("#container").attr("id") == getter
// s("#container").attr("class", "container2") == setter
Element.prototype.attr = function(attributeName, attributeValue) {
    var aliases = {
        "class": "className"
    };
    var domElement = this.domRepr();

    if(hasKey(aliases, attributeName)) {
        attributeName = aliases[attributeName];
    }

    if(hasKey(domElement, attributeName)) {
        if (typeof attributeValue === "undefined") {
            return domElement[attributeName];
        } else {
            domElement[attributeName] = attributeValue;
            return this;
        }
    }
};

Element.prototype.forEach = function(f) {
  var domElement = this.domRepr();

  if(!isArrayLike(domElement)) {
    domElement = [domElement];
  }

  for(var i = 0; i < domElement.length; i += 1) {
    f(domElement[i]);
  }

  return this;
};

