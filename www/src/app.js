(function() {
    'use strict';

    var angularModules = [
        'ionic',
        // 'ngStorage',
        // 'ngCordova',
        // 'ngMessages',
        // 'ngAria'
    ];

    var thirdPartyModules = [
        // 'gettext',
        // 'validation.match',
        // 'ngMaterial'
    ];

    var featureModules = [
        'app.core',
        'app.menu',
        'app.intro',
        'app.login',
        'app.dashboard',
        'app.menu-slide'
    ];

    var modules = angularModules.concat(thirdPartyModules, featureModules);

    angular.module('app', modules);
})();
