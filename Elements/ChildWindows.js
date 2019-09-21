describe('Actions Demo',function(){

	it('Open Posee Website',function(){
		
	
		
		
		browser.get('http://posse.com/search?searchType=awesomeness&latSW=-8.8492&lngSW=114.4316&latNE=-8.0616&lngNE=115.7115');
		expect(element.all(by.css("div[ng-mouseover='onSearchResultOver(searchResult)']")).count()).toEqual(64);
		
		//element.all(by.css("div[ng-mouseover*='onSearchResultOver']"))
		
		
		element.all(by.css("div[ng-mouseover='onSearchResultOver(searchResult)']")).get(0).click();
		
		browser.sleep(3000);
		
	})
	
	
	
	
	
})
