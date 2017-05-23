(function () {
    'use strict';

    angular
        .module('app.ionic-menu')
        .directive('submenuList', submenuList);

    /* @ngInject */
    function submenuList() {
        return {
            restrict : 'A',
            scope : {
                menuItem: '='
            },
            controller : SubmenuController,
            templateUrl: 'src/components/ionic-menu/submenu-list/submenu-list.html'
        };

        /* @ngInject */
        function SubmenuController ($scope, $state) {

            $scope.onClickSubmenu = onClickSubmenu;
            $scope.toggleSubmenu = toggleSubmenu;

            function onClickSubmenu(submenu) {
                if (angular.isUndefined(submenu.state)) {
                    submenu.callback();
                    return;
                }
                $state.go(submenu.state);
            }

            function toggleSubmenu() {
                $scope.menuItem.isOpen = !$scope.menuItem.isOpen;
            }

        }
    }

})();
