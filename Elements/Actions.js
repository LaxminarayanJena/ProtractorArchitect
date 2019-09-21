describe('Actions Demo',function(){

	it('Type select dropdown',function(){
		
	
		
		browser.get('https://valor-software.com/ng2-select/');
		
		element(by.xpath("//*[text()='Multiple']")).click();
		
		//element(by.cssContainingText('option', 'BeaverBox Testing')).click();
		browser.sleep(3000);
		element(by.xpath("//input[@placeholder='No city selected']")).sendKeys("b");
		
		browser.sleep(5000);
		

		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform();
		
		
		browser.get('http://posse.com/search?searchType=awesomeness&latSW=-8.8492&lngSW=114.4316&latNE=-8.0616&lngNE=115.7115');
		expect(element.all(by.css("div[ng-mouseover='onSearchResultOver(searchResult)']")).count()).toEqual(64);
		
		//element.all(by.css("div[ng-mouseover*='onSearchResultOver']"))
		
		
		element.all(by.css("div[ng-mouseover='onSearchResultOver(searchResult)']")).get(0).click();
		
		browser.sleep(3000);
		
	})
	
	
	
	
	
})
