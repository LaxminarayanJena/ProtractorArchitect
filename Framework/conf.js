exports.config = {
		directConnect: true,
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['FirstTest.js'],
  
  onPrepare :function()
{
	browser.driver.manage().window().maximize();
},
  
  capabilities:
	  {
	  'browserName':'chrome'
	  }

};