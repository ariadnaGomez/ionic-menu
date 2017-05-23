(function () {
    'use strict';

    angular
        .module('app.menu-slide')
        .directive('submenuList', submenuList);

    /* @ngInject */
    function submenuList() {
        return {
            restrict : 'A',
            scope : {
                menuItem: '='
            },
            controller : SubmenuController,
            template: '<div class="header"> <i class="icon" ng-class="menuItem.icon">' +
            '</i> <h2 ng-bind="menuItem.title"></h2></div><ion-list> <ion-item class="item-icon-left"' +
            ' ng-click="toggleSubmenu(index)"> <i class="icon ion-ios-arrow-back"></i> Atrás ' +
            '</ion-item> <ion-item class="item-icon-left" ng-repeat="(indexSubmenu, submenu)' +
            ' in menuItem.submenu" ng-click="onClickSubmenu(submenu)" menu-close>' +
            ' <i class="icon" ng-class="submenu.icon"></i>{{submenu.title}}</ion-item></ion-list>'
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
