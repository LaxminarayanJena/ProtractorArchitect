"use strict";
exports.__esModule = true;
var classDemo_1 = require("./classDemo");
var cd = new classDemo_1.classDemo(123);
cd.setUsername("ram");
console.log(cd.getUsername());
console.log(cd.getSSN());
function validate(value) {
    return value + 1;
}
function validateCar(car) {
    console.log(car.camera);
    console.log(car.engine);
}
var bmw = {
    color: "red",
    engine: 100,
    camera: true
};
validateCar(bmw);
//console.log(obj.engine);
console.log(validate(2));
