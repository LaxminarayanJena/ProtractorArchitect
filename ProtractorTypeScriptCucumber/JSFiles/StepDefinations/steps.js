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
let calc = new Calculator_1.Calculator();
cucumber_1.Given('I will navigate to Calc Site', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
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
cucumber_1.Given('I will navigate to Angular js page', function () {
});
cucumber_1.When('I click on header link', function () {
});
cucumber_1.When('you will navigate to angular page', function () {
});
cucumber_1.Then('you will enter {string} in search box', function (string) {
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5hdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSwyQ0FBbUM7QUFDbkMsdUNBQXlDO0FBRXpDLDBEQUFxRDtBQUNyRCxJQUFJLElBQUksR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUVuQixnQkFBSyxDQUFDLDhCQUE4QixFQUFFLEdBQU8sRUFBRTtJQUM1QyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7QUFDbkUsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUlILGVBQUksQ0FBQyx5Q0FBeUMsRUFBRSxDQUFNLE1BQU0sRUFBRSxPQUFPLEVBQUMsRUFBRTtJQUVyRSxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7QUFHOUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyx5Q0FBeUMsRUFBRSxDQUFNLE1BQU0sRUFBQyxFQUFFO0lBQzVELE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QixNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtRQUVyRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRVosQ0FBQyxDQUFDLENBQUE7QUFHRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBSUgsZ0JBQUssQ0FBQyxvQ0FBb0MsRUFBRTtBQUU1QyxDQUFDLENBQUMsQ0FBQztBQUlILGVBQUksQ0FBQyx3QkFBd0IsRUFBRTtBQUUvQixDQUFDLENBQUMsQ0FBQztBQUlILGVBQUksQ0FBQyxtQ0FBbUMsRUFBRTtBQUUxQyxDQUFDLENBQUMsQ0FBQztBQUlILGVBQUksQ0FBQyx1Q0FBdUMsRUFBRSxVQUFVLE1BQU07QUFFOUQsQ0FBQyxDQUFDLENBQUMifQ==