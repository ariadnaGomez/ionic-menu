(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .config(moduleConfig);

    function moduleConfig($stateProvider) {
        $stateProvider
            .state('app.home.dashboard', {
                url: '/dashboard',
                cache: false,
                views: {
                    'homeContent': {
                        templateUrl: 'src/dashboard/dashboard.html',
                        controller: 'DashboardCtrl'
                    }
                }
            });
    }
})();
