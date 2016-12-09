
exports.config = {
    getPageTimeout: 10000,

    onPrepare: function () {
        browser.manage().timeouts().setScriptTimeout(60000);
    },
    //   seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    capabilities: {
        browserName: 'firefox'
    },

    specs: [
        // Login Page
        // 'features/Organization/Create_Organization.feature '


        'features/Critical/Organization/*.feature',
        'features/Critical/Person/*.feature',
        'features/Critical/Family/*.feature',
        'features/MediumPriority/Organization/*.feature',
        'features/MediumPriority/Person/*.feature',
        'features/MediumPriority/Family/*.feature',
        'features/LowPriority/Organization/*.feature',
        'features/LowPriority/Person/*.feature',
        'features/LowPriority/Family/*.feature'
    ],


    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
    //    require: ['step_definitions.js' ],
        require: ['features/step_definitions/step_definitions.js' ],
        format: 'pretty',
        format: 'json:results/output.json',
        // format: 'pretty',
        resultJsonOutputFile: 'true'

    }

};
