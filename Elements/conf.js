exports.config = {
		directConnect: true,
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['Sync.js'],
  
  
  
  capabilities:
	  {
	  'browserName':'chrome'
	  }
};