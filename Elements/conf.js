exports.config = {
		directConnect: true,
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['DataTest.js'],
  
  
  
  capabilities:
	  {
	  'browserName':'chrome'
	  }
};