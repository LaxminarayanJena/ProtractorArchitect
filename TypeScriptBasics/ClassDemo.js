var classDemo = /** @class */ (function () {
    function classDemo() {
    }
    classDemo.prototype.getUsername = function () {
        return this.username; //username property of the class
    };
    classDemo.prototype.setUsername = function () {
        this.username = "hello"; // set username propert to one name
    };
    classDemo.prototype.getSSN = function () {
        return this.ssn;
    };
    return classDemo;
}());
//create object of the class and using that object call the methods or properties present in that class
var cd = new classDemo();
cd.setUsername();
console.log(cd.getUsername());
