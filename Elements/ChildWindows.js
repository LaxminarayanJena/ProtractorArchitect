describe('Actions Demo',function(){

	it('Open Posee Website',function(){
		
	
		
		
		browser.get('http://posse.com/search?searchType=awesomeness&latSW=-8.8492&lngSW=114.4316&latNE=-8.0616&lngNE=115.7115');
		expect(element.all(by.css("div[ng-mouseover='onSearchResultOver(searchResult)']")).count()).toEqual(64);
		
		//element.all(by.css("div[ng-mouseover*='onSearchResultOver']"))
		
		
		element.all(by.css("div[ng-mouseover='onSearchResultOver(searchResult)']")).get(0).click();
		
		browser.sleep(3000);
		
		element(by.css("a[ng-href='/place/ID/Kuta/Ku De Ta']")).click().then(function()
		
		{
			browser.sleep(3000)
			
			
		})
		
		browser.getAllWindowHandles().then(function(handles)
					
			{
				browser.switchTo().window(handles[1]);
				browser.getTitle().then(function(title)
						{
					console.log("title after switching" +title);
						})
						
						browser.switchTo().window(handles[0]);	
				
			})
			
			
	})
	
	
	
	
	
})
