describe('Protractor Element Demo',function(){

	it('Locators',function(){
		
		
		//browser.waitForAngularEnabled(false);
		//browser.get("http://www.google.com");
		
		
		browser.get('https://juliemr.github.io/protractor-demo/');
		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("5");
		
		element(by.id("gobutton")).click();
		
		//tagname[attribute='value]
		
		
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("8");
		element(by.css("h2[class='ng-binding']")).getText().then(function(text)
		{
		console.log(text);
		
		})
		
		
		
	})
	
	
	
	
	
})


