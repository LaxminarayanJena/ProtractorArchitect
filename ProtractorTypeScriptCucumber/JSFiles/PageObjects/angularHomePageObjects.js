"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class angularHomePageObjects {
    constructor() {
        this.headerText = protractor_1.element(protractor_1.by.linkText("angular.io"));
        this.search = protractor_1.element(protractor_1.by.css("input[type='search']"));
    }
}
exports.angularHomePageObjects = angularHomePageObjects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhckhvbWVQYWdlT2JqZWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1BhZ2VPYmplY3RzL2FuZ3VsYXJIb21lUGFnZU9iamVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyQ0FBc0Q7QUFDdEQsTUFBYSxzQkFBc0I7SUFPL0I7UUFHSSxJQUFJLENBQUMsVUFBVSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxNQUFNLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztJQUV4RCxDQUFDO0NBQ0o7QUFkRCx3REFjQyJ9