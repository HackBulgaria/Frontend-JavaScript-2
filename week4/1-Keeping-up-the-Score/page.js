function text(content) {
    return document.createTextNode(content);
}

function hasKey(dict, key) {
    return typeof dict[key] !== "undefined";
}

Element.createElement = function(tagName, content, attributes) {
    attributes = attributes || {};

    var obj = document.createElement(tagName);
    obj.appendChild(text(content));

    if(hasKey(attributes, "id")) {
        obj.id = attributes["id"];
    }

    return new Element(obj);
};

function Element(domElement) {
    this.domElement = domElement;
}

Element.prototype.appendChild = function(child) {
    if(child instanceof Element) {
        child = child.domElement;
    }

    this.domElement.appendChild(child);
};

Element.prototype.on = function(type, callback) {
    this.domElement.addEventListener(type, callback);
};

Element.prototype.attr = function(attributeName, attributeValue) {
    var aliases = {
        "class": "className"
    };

    if(hasKey(aliases, attributeName)) {
        attributeName = aliases[attributeName];
    }

    if(hasKey(this.domElement, attributeName)) {
        if (typeof attributeValue === "undefined") {
            return this.domElement[attributeName];
        } else {
            this.domElement[attributeName] = attributeValue;
            return attributeValue;
        }
    }
};


function print(obj) {
    console.log(obj);
}

document.addEventListener("DOMContentLoaded", function(event) {
    function buttonClickHandler(event) {
        var id = event.target.id;
        scores[id] += 1;

        document.getElementById(id + "Score").firstChild.data = scores[id];
    }

    var scores = {
            "teamA": 0,
            "teamB": 0
          },
          container = document.getElementById("container");

    var teamAButton = Element.createElement("button", "Team A", {
        id: "teamA"
    });

    var teamAScoreText = "Team A Score: ";
    var teamAHeading = Element.createElement("h1", teamAScoreText);

    var teamASpan = Element.createElement("span", "0", {
        id: "teamAScore"
    });

    teamAHeading.appendChild(teamASpan);

    teamAButton.on("click", function(event) {
        console.log("Does it work?");
        console.log(event);
    });

    // var teamBButton = document.createElement("button");
    // teamBButton.id = "teamB";
    // teamBButton.appendChild(text("Team B"));

    // var teamBScoreText = "Team B Score: ";
    // var teamBHeading = document.createElement("h1");
    // var teamBSpan = document.createElement("span");
    // teamBSpan.appendChild(text("0"));
    // teamBSpan.id = "teamBScore";

    // teamBHeading.appendChild(text(teamBScoreText));
    // teamBHeading.appendChild(teamBSpan);

    // teamAButton.onclick = buttonClickHandler;
    // teamBButton.onclick = buttonClickHandler;

    container.appendChild(teamAHeading.domElement);
    container.appendChild(teamAButton.domElement);

    // container.appendChild(teamBHeading);
    // container.appendChild(teamBButton);
});
