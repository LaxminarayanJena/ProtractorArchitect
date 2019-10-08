"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const protractor_2 = require("protractor");
describe('Protractor Element Demo', function () {
    it('Locators', function () {
        //browser.waitForAngularEnabled(false);
        //browser.get("http://www.google.com");
        protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
        protractor_2.element(protractor_2.by.model("first")).sendKeys("3");
        protractor_2.element(protractor_2.by.model("second")).sendKeys("5");
        protractor_2.element(protractor_2.by.id("gobutton")).click();
        //tagname[attribute='value]
        expect(protractor_2.element(protractor_2.by.css("h2[class='ng-binding']")).getText()).toBe("8");
        protractor_2.element(protractor_2.by.css("h2[class='ng-binding']")).getText().then(function (text) {
            console.log(text);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFtQztBQUNuQywyQ0FBc0M7QUFFdEMsUUFBUSxDQUFDLHlCQUF5QixFQUFDO0lBRWxDLEVBQUUsQ0FBQyxVQUFVLEVBQUM7UUFHYix1Q0FBdUM7UUFDdkMsdUNBQXVDO1FBR3ZDLG9CQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7UUFDMUQsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUxQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVuQywyQkFBMkI7UUFHM0IsTUFBTSxDQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBRXRFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEIsQ0FBQyxDQUFDLENBQUE7SUFJSCxDQUFDLENBQUMsQ0FBQTtBQU1ILENBQUMsQ0FBQyxDQUFBIn0=