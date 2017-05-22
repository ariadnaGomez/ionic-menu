(function() {
    'use strict';

    angular
        .module('app.menu')
        .controller('MenuController', MenuController);

    /* @ngInject */
    function MenuController($scope, menuData) {
        $scope.menu = menuData.getMenu();
        $scope.side = 'right';
        $scope.logo = '../img/sopra.png';
    }


})();
