describe('Protractor Element Demo', function() {

	it('Locators', function() {

		browser.get('https://juliemr.github.io/protractor-demo/');
		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("5");

		element(by.id("gobutton")).click();

		// repeator, chain locators and css for identical tags
		
		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text)
		
		
		{
			console.log(text);
			
		})
		
	})


})
