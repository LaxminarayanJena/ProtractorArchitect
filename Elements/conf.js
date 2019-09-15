exports.config = {
		directConnect: true,
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['ChainLocators.js'],
  
  
  
  capabilities:
	  {
	  'browserName':'chrome'
	  }
};