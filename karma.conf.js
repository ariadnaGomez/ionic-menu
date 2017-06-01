'use strict';
module.exports = function(config) {
    var wiredep = require('wiredep');
    var bowerFiles = wiredep({devDependencies: true})['js'];

    var preprocessors = {};
    preprocessors['./www/src/**/!(*.spec)+(.js)'] = ['coverage'];
    preprocessors['./www/src/**/*.html'] = ['ng-html2js'];
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',

        // frameworks to use
        // some available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [].concat(
            bowerFiles,
            './www/app.module.js',
            // './www/index.html',
            './www/src/*.*.js',
            './www/src/*.js',
            './www/src/**/*.module.js',
            './www/src/**/*.js',
            './www/src/**/*.html',
            './www/cache/templates.js'
        ),

        // list of files to exclude
        exclude: [],

        proxies: {
            '/': 'http://localhost:8888/'
        },

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: preprocessors,

        ngHtml2JsPreprocessor:  {
            stripPrefix: './www',
            moduleName: 'ngTemplates'
        },

        // test results reporter to use
        // possible values: 'dots', 'progress', 'coverage'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage', 'junit'],

        coverageReporter: {},

        junitReporter: {
            outputDir: 'reports/junit/',
            outputFile: 'TESTS-xunit.xml'
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR ||
        // config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        //        browsers: ['Chrome', 'ChromeCanary', 'FirefoxAurora', 'Safari', 'PhantomJS'],
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
