//FCC Make A Person https://www.freecodecamp.com/challenges/make-a-person
"use strict";

var Person = function(firstAndLast) {
  var name = firstAndLast;

  this.getFirstName = function () {
    return name.split(' ')[0];
  };
  this.getLastName = function () {
    return name.split(' ')[1];
  };
  this.getFullName = function () {
    return name;
  };
  this.setFirstName = function (newName) {
    name = newName + ' ' + name.split(' ')[1];
  };
  this.setLastName = function (newName) {
    name = name.split(' ')[0] + ' ' + newName;
  };
  this.setFullName = function (newName) {
    name = newName;
  };

};

var bob = new Person('Bob Ross');

bob.getFirstName();
