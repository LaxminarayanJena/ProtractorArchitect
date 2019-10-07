"use strict";
exports.__esModule = true;
var classDemo = /** @class */ (function () {
    function classDemo(ssn) {
        //console.log("i will execute first");
        this.ssn = ssn;
    }
    classDemo.prototype.getUsername = function () {
        return this.username; //username property of the class
    };
    classDemo.prototype.setUsername = function (username) {
        this.username = username; // set username propert to one name
    };
    classDemo.prototype.getSSN = function () {
        return this.ssn;
    };
    return classDemo;
}());
exports.classDemo = classDemo;
//create object of the class and using that object call the methods or properties present in that class
var cd = new classDemo(123);
cd.setUsername("ram");
console.log(cd.getUsername());
console.log(cd.getSSN());
