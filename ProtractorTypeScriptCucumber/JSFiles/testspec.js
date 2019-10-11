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
const protractor_2 = require("protractor");
const Calculator_1 = require("./PageObjects/Calculator");
describe('Protractor Element Demo', function () {
    it('Locators', () => __awaiter(this, void 0, void 0, function* () {
        //browser.waitForAngularEnabled(false);
        //browser.get("http://www.google.com");
        //u can use promise or async await
        protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
        yield protractor_2.element(protractor_2.by.model("first")).sendKeys("3");
        protractor_2.element(protractor_2.by.model("second")).sendKeys("5");
        protractor_2.element(protractor_2.by.id("gobutton")).click();
        //tagname[attribute='value]
        expect(protractor_2.element(protractor_2.by.css("h2[class='ng-binding']")).getText()).toBe("8");
        protractor_2.element(protractor_2.by.css("h2[class='ng-binding']")).getText().then(function (text) {
            console.log(text);
        });
    }));
    it('Angular homepage title validation', () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://angularjs.org/");
        yield protractor_2.element(protractor_2.by.linkText("angular.io")).click();
        yield protractor_2.element(protractor_2.by.css("input[type='search']")).sendKeys("hello");
    }));
    it('Calculator Test', () => __awaiter(this, void 0, void 0, function* () {
        let calc = new Calculator_1.Calculator();
        yield protractor_1.browser.get("https://juliemr.github.io/protractor-demo/");
        yield calc.firstEditBox.sendKeys("3");
        yield calc.secondEditBox.sendKeys("5");
        yield calc.go.click();
        calc.getResult.getText().then(function (text) {
            console.log(text);
        });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFtQztBQUNuQywyQ0FBc0M7QUFDdEMseURBQW9EO0FBRXBELFFBQVEsQ0FBQyx5QkFBeUIsRUFBQztJQUVsQyxFQUFFLENBQUMsVUFBVSxFQUFDLEdBQU8sRUFBRTtRQUd0Qix1Q0FBdUM7UUFDdkMsdUNBQXVDO1FBRXZDLGtDQUFrQztRQUVsQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1FBQzFELE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUxQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVuQywyQkFBMkI7UUFHM0IsTUFBTSxDQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBRXRFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEIsQ0FBQyxDQUFDLENBQUE7SUFJSCxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLG1DQUFtQyxFQUFDLEdBQU8sRUFBRTtRQUcvQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDNUMsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqRCxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBR2hFLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFJRixFQUFFLENBQUMsaUJBQWlCLEVBQUMsR0FBTyxFQUFFO1FBRzlCLElBQUksSUFBSSxHQUFFLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBRTNCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztRQUNoRSxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBR3RCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUUzQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWxCLENBQUMsQ0FBQyxDQUFBO0lBT0YsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVILENBQUMsQ0FBQyxDQUFBIn0=