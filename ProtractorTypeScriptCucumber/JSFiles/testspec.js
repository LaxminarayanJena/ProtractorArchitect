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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFtQztBQUNuQywyQ0FBc0M7QUFFdEMsUUFBUSxDQUFDLHlCQUF5QixFQUFDO0lBRWxDLEVBQUUsQ0FBQyxVQUFVLEVBQUMsR0FBTyxFQUFFO1FBR3RCLHVDQUF1QztRQUN2Qyx1Q0FBdUM7UUFFdkMsa0NBQWtDO1FBRWxDLG9CQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7UUFDMUQsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0Msb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRW5DLDJCQUEyQjtRQUczQixNQUFNLENBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0RSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7WUFFdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVsQixDQUFDLENBQUMsQ0FBQTtJQUlILENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsbUNBQW1DLEVBQUMsR0FBTyxFQUFFO1FBRy9DLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUM1QyxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pELE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFHaEUsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUlILENBQUMsQ0FBQyxDQUFBIn0=