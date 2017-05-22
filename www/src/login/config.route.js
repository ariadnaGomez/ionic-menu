(function() {
    'use strict';

    angular
        .module('app.login')
        .config(moduleConfig);

    function moduleConfig($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                views: {
                    'mainApp@': {
                        templateUrl: 'src/login/login.html',
                        controller: 'LoginCtrl'
                    }
                }
            });
    }
})();
