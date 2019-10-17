"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const cucumber_1 = require("cucumber");
const Calculator_1 = require("../PageObjects/Calculator");
const angularHomePageObjects_1 = require("../PageObjects/angularHomePageObjects");
let calc = new Calculator_1.Calculator();
let angular = new angularHomePageObjects_1.angularHomePageObjects();
cucumber_1.Given('I will navigate to Calc Site', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
}));
cucumber_1.Given('I will navigate to {string} Site', (string) => __awaiter(void 0, void 0, void 0, function* () {
    if (string == "calc") {
        yield protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
    }
    else if (string == "AngularJs") {
        yield protractor_1.browser.get("https://angularjs.org");
    }
}));
cucumber_1.When('I add two numbers {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.firstEditBox.sendKeys(string);
    yield calc.secondEditBox.sendKeys(string2);
}));
cucumber_1.Then('the output displayed should be {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.go.click();
    yield calc.getResult.getText().then(function (text) {
        console.log(text);
    });
}));
cucumber_1.When('I click on header link', () => __awaiter(void 0, void 0, void 0, function* () {
    yield angular.headerText.click();
}));
cucumber_1.When('you will navigate to angular page', function () {
    console.log("navigated to new page");
});
cucumber_1.Then('you will enter {string} in search box', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield angular.search.sendKeys(string);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5hdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSwyQ0FBbUM7QUFDbkMsdUNBQXlDO0FBRXpDLDBEQUFxRDtBQUNyRCxrRkFBNkU7QUFDN0UsSUFBSSxJQUFJLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFDNUIsSUFBSSxPQUFPLEdBQUcsSUFBSSwrQ0FBc0IsRUFBRSxDQUFDO0FBRWxDLGdCQUFLLENBQUMsOEJBQThCLEVBQUUsR0FBTyxFQUFFO0lBQzVDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztBQUNuRSxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0gsZ0JBQUssQ0FBQyxrQ0FBa0MsRUFBRSxDQUFNLE1BQU0sRUFBQyxFQUFFO0lBQ3ZELElBQUcsTUFBTSxJQUFFLE1BQU0sRUFDakI7UUFDQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7S0FDaEU7U0FDSSxJQUFHLE1BQU0sSUFBRSxXQUFXLEVBQzNCO1FBQ0EsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0tBQzFDO0FBQ0YsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUlKLGVBQUksQ0FBQyx5Q0FBeUMsRUFBRSxDQUFNLE1BQU0sRUFBRSxPQUFPLEVBQUMsRUFBRTtJQUVyRSxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7QUFHOUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQU9ILGVBQUksQ0FBQyx5Q0FBeUMsRUFBRSxDQUFNLE1BQU0sRUFBQyxFQUFFO0lBQzVELE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QixNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtRQUVyRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRVosQ0FBQyxDQUFDLENBQUE7QUFHRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBT0gsZUFBSSxDQUFDLHdCQUF3QixFQUFFLEdBQU8sRUFBRTtJQUd0QyxNQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7QUFFcEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUlILGVBQUksQ0FBQyxtQ0FBbUMsRUFBRTtJQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDdEMsQ0FBQyxDQUFDLENBQUM7QUFJSCxlQUFJLENBQUMsdUNBQXVDLEVBQUUsQ0FBTSxNQUFNLEVBQUMsRUFBRTtJQUUzRCxNQUFNLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3hDLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==