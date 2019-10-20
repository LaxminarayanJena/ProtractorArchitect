describe('Protractor Element Demo',function(){
	var obj= require("./data.js");
	var using=require('jasmine-data-provider');
	
	using(obj.DataDriven,function(data,description)
	{
	
	it('Locators',function(){
		
		
		
		browser.get('https://juliemr.github.io/protractor-demo/');
		element(by.model("first")).sendKeys(data.firstinput);
		//element(by.model("second")).sendKeys(obj.datadrive.secondinput);
		element(by.model("second")).sendKeys(data.secondinput);
		
		element(by.id("gobutton")).click();
		
		
		
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe(data.result);
		element(by.css("h2[class='ng-binding']")).getText().then(function(text)
		{
		console.log(text);
		
		})
		
		
		
	})
	
	
	
	
	
})


	
	})
	

	