import {browser} from "protractor";
import {element,by} from "protractor";
import {Calculator} from "./PageObjects/Calculator";

describe('Protractor Element Demo',function(){

	it('Locators',async()=>{
		
		
		//browser.waitForAngularEnabled(false);
		//browser.get("http://www.google.com");
		
		//u can use promise or async await
		
		browser.get('https://juliemr.github.io/protractor-demo/');
		await element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("5");
		
		element(by.id("gobutton")).click();
		
		//tagname[attribute='value]
		
		
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("8");
		element(by.css("h2[class='ng-binding']")).getText().then(function(text)
		{
		console.log(text);
		
		})
		
		
		
	})
	
	it('Angular homepage title validation',async()=>
	{
		
		await browser.get("https://angularjs.org/");
		await element(by.linkText("angular.io")).click();
		await element(by.css("input[type='search']")).sendKeys("hello");
		
		
		})
		
		

		it('Calculator Test',async()=>
	{
		
		let calc= new Calculator();
		 
		await browser.get("https://juliemr.github.io/protractor-demo/");
		await calc.firstEditBox.sendKeys("3");
		await calc.secondEditBox.sendKeys("5");
		await calc.go.click();
		
		
		calc.getResult.getText().then(function(text)
		{
		console.log(text);
		
		})




		
		
		})
		
	})

