(function() {
    'use strict';

    angular
        .module('app.menu')
        .controller('MenuController', MenuController);

    /* @ngInject */
    function MenuController($scope, menuData) {
        $scope.menu = menuData.getMenu();
        $scope.side = 'right';
        $scope.logo = 'https://pmcdeadline2.files.wordpress.com/2016/07/logo-tv-logo.png?w=151&h=149';
    }

})();
