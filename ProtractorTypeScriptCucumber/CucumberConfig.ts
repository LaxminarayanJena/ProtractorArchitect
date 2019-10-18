import {Config} from 'protractor'
import * as reporter from "cucumber-html-reporter"

export let config: Config = {
    directConnect:true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
   // seleniumAddress: 'http://localhost:4444/wd/hub',


    onComplete: () => {
      var options = {
        theme: 'bootstrap',
        jsonFile: './cucumberreport.json',
        output: './cucumberreport.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
      };

      reporter.generate(options);
    },
    capabilities: {
        'browserName': 'chrome',
        'marionette': true,
    },
    SELENIUM_PROMISE_MANAGER: false,
    specs: ['../features/demo.Feature'],
    cucumberOpts: {
        require:[
          './StepDefinations/*.js'
        ],
        format: 'json:cucumberreport.json',

      },

}; 
