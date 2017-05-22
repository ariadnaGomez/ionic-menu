(function() {
    'use strict';

    angular.module('app').config(moduleConfig);

    function moduleConfig($stateProvider) {
        $stateProvider
        .state('app', {
            url: '/app',
            cache: false,
            abstract: true,
            views: {
                'mainApp@': {
                    templateUrl: 'src/layout/menu.html',
                    controller: 'MenuController'
                }
            }
        }).state('app.home', {
            url: '/ionic-menu',
            cache: false,
            views: {
                'menuContent': {
                    template: '<ion-nav-view name="homeContent"></ion-nav-view>'
                }
            }

        })
        .state('app.home.index', {
            url: '/home',
            cache: false,
            views: {
                'homeContent': {
                    templateUrl: 'src/intro/intro.html',
                    controller: 'IntroCtrl'
                }
            }
        });
    }
})();
