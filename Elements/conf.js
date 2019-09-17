exports.config = {
		directConnect: true,
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['All.js'],
  
  
  
  capabilities:
	  {
	  'browserName':'chrome'
	  }
};