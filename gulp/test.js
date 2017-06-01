/**
 * Run specs once and exit
 */
module.exports = function (gulp, plugins, config, args) {
    'use strict';

    var startTests = require('./startTests');

    return function(done) {
        startTests(true /*singleRun*/, false, done);
    };
};
