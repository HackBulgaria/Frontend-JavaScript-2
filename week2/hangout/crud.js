"use strict"
// dependencies
var prompt = require('prompt');
var jsonfile = require('jsonfile');
var chalk = require('chalk');

// file to store users
var usersFile = 'data/users.json';

// searchable fields
var searchableFields = ["name", "email"];

// value colors
var valueColors = {
  "number" : "blue",
  "string" : "yellow"
}

// collection with users
var users = [
  {
    id: 123,
    name: "Alex",
    email: "alex@i4web.biz"
  },
  {
    id: 456,
    name: "Gosho",
    email: "gosho@test.com"
  }
];

// collection with commands
var commands = [
  {"menu": "list"},
  {"menu": "add"},
  {"menu": "get"},
  {"menu": "update"},
  {"menu": "remove"},
  {"menu": "load"},
  {"menu": "save"},
  {"menu": "quit"}
];

// util functions
// reset screen
function resetScreen() {
  return process.stdout.write('\x1Bc');
}

function createMold(length){
  var mold = "|";
  for(var i=1; i<=length; i++){
    mold += " ";
  }
  mold += "|";
  return mold;
}

function buildSeparator(lengths){
  var output = "";
  lengths.forEach(function(length){
    for(var i=1; i<=length+2; i++){
      output += "-";
    }
  })
  console.log(output);
}

function buildColumn(value, length, color){
  var mold = createMold(length);
  var fmtValue = (color) ? chalk[color](value) : value;
  return mold.substr(0,2) +  fmtValue + mold.substr(value.length+2);
}

function buildHeader(item, lengths){
  var output = "";
  Object.keys(item).forEach(function(key, index){
    output += buildColumn(key, lengths[index], "red")
  });
  console.log(output);
}

function buildRow(item, lengths){
  var output = "";
  Object.keys(item).forEach(function(key, index){

    var value = String(item[key]);
    var color = valueColors[typeof(item[key])] || false;
    
    output += buildColumn(value, lengths[index], color)
  });
  console.log(output);
}


function calculateLengths(items){
  var maxLengths = [];
  items.forEach(function(item, index) {
    Object.keys(item).forEach(function(key, keyIndex){
      var value = String(item[key]);
      if(!maxLengths[keyIndex] || value.length+2 > maxLengths[keyIndex]){
        maxLengths[keyIndex] = value.length+2;
      }
    })
  })
  return maxLengths;
}

// build table
function buildTable(items){
  var lengths = calculateLengths(items);
  buildSeparator(lengths)
  buildHeader(items[0], lengths);
  buildSeparator(lengths)
  items.forEach(function(item, index) {
    buildRow(item, lengths);
  })
  buildSeparator(lengths)
}

// get functions
// show list
function showList(){
  buildTable(users);
}

function selectIndexById(arr, id){
  // var to store matched index
  var matchIndex = false;
  
  // select element by id
  arr.forEach(function(item, index) {
      if(item.id == id){
        matchIndex = index;
      }
  });

  return matchIndex;
}

// get by id
function promptGetById(){
  prompt.get(['id'], function (err, result) {
    
    var id = result.id;

    // var to store matched index
    var matchIndex = selectIndexById(users, id);

    // display it
    if(matchIndex !== false){
      buildTable([users[matchIndex]]);
    } else {
      console.log("Could not find user");
    }

    // prompt for next command
    promptMenuCommand();
    
  });
}

// search
function promptSearch(){
  prompt.get(['keyword'], function(err, result){
    
    var keyword = result.keyword;

    var matchedItems = [];

    users.forEach(function(item, index) {
      var hasMatch = false;
      searchableFields.forEach(function(field){
        if(item[field].match(keyword)){
          hasMatch = true;
        }
      })
      if(hasMatch){
        matchedItems.push(item);
      }
    });

    if(matchedItems.length > 0)
      buildTable(matchedItems);
    else
      console.log("Could not find matches!");

    promptMenuCommand();

  })
}

// update by id
function promptUpdateById(){
  prompt.get(['id','field','value'], function (err, result) {
    
    if(!result.id || !result.field || result.value === undefined){
      console.log("id, field, value are required");
      promptUpdateById();
      return false;
    }

    var id = result.id;
    var field = result.field;
    var value = result.value;

    // var to store matched index
    var matchIndex = selectIndexById(users, id);

    // update entry 
    if(matchIndex !== false){
      var oldValue = users[matchIndex][field];
      
      users[matchIndex][field] = value;
      
      console.log("Successfully changed the value of "+field
        +" from "+oldValue+" to "+value+" for id "+id);
      
      console.log(users[matchIndex]);

    } else {
      console.log("Could not find user");
    }

    // prompt for next command
    promptMenuCommand();
    
  });
}

// remove
function promptRemoveById(){
  prompt.get(['id'], function (err, result) {
    
    var id = result.id;

    // var to store matched index
    var matchIndex = selectIndexById(users, id);

    // remove it
    if(matchIndex !== false){
      users.splice(matchIndex, 1);
      console.log("Successfully removed user for id "+id);

      // show updated list
      showList();

    } else {
      console.log("Could not find user");
    }

    // prompt for next command
    promptMenuCommand();
    
  });
}

// add item
function promptAddItem(){

  // 
  console.log("Enter item to add:");

  prompt.get(['id','name','email'], function (err, result) {
    
    users.push(result);
    console.log("Successfully added user!");

    // show updated list
    showList();

    // prompt for next command
    promptMenuCommand();
    
  });
}

function loadFromFile(){
  users = jsonfile.readFileSync(usersFile);

}

function saveToFile(){
  jsonfile.writeFileSync(usersFile, users);
}


// quit
function quit(){
  console.log("See you soon!");
}

// show menu
function showMenu(){
  buildTable(commands);
}

// prompt menu command
function promptMenuCommand(){

  console.log("")
  showMenu();

  prompt.get(['command'], function (err, result) {
  
    resetScreen();

    if(result === undefined){
      return quit();
    }

    var command = result.command;

    switch(command){
      case "list":
        showList();
        promptMenuCommand();
        break;
      case "add":
        promptAddItem();
        break;
      case "get":
        promptGetById();
        break;
      case "search":
        promptSearch();
        break;
      case "update":
        promptUpdateById();
        break;
      case "remove":
        promptRemoveById();
        break;
      case "load":
        loadFromFile();
        promptMenuCommand();
        break;
      case "save":
        saveToFile();
        promptMenuCommand();
        break;
      case "quit":
        quit();
        break;
      default:
        console.log("Unrecognized command!");
        promptMenuCommand();
        break;
    }
    
  });

}


// code
prompt.start();

promptMenuCommand();
