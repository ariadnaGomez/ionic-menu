(function () {
    'use strict';

    angular
        .module('app.ionic-menu')
        .directive('ionicMenu', ionicMenu);

    /* @ngInject */
    function ionicMenu() {
        return {
            restrict : 'E',
            transclude: {
                header: '?menuHeader',
                footer: '?menuFooter'
            },
            scope : {
                menu: '=',
                side: '=',
                logoPath: '=',
                title: '@',
                version: '@'
            },
            controller : MenuController,
            templateUrl: 'src/components/ionic-menu/ionic-menu.html',
            link: Link
        };

        /* @ngInject */
        function Link(scope, element) {
            var menuContent = angular.element(document).find('ion-side-menu-content');
            if (menuContent.length) {
                menuContent.addClass(scope.side);
            }
        }

        /* @ngInject */
        function MenuController ($scope, $ionicSideMenuDelegate, $state) {

            var RIGHT_SIDE_MENU = 'right';

            $scope.closeMenu = closeMenu;
            $scope.onClickMenu = onClickMenu;
            $scope.toggleSubmenu = toggleSubmenu;
            $scope.hasSubmenuOpenClass = hasSubmenuOpenClass;
            $scope.closeSubmenu = initSubmenu;
            $scope.hasSubmenu = hasSubmenu;
            $scope.getSubmenuOpenClass = getSubmenuOpenClass;
            $scope.goToMenu = goToMenu;

            activate();

            function activate() {
                initSubmenu();
                if (angular.isUndefined($scope.side) || $scope.side === null || $scope.side === ' ') {
                    $scope.side = RIGHT_SIDE_MENU;
                }
            }

            $scope.$on('menu-multilevel:close', closeMenu);

            $scope.$watch(
                function () {
                    return isOpenMenu();
                },
                function (isOpen) {
                    if (!isOpen) {
                        initSubmenu();
                    }
                }
            );

            function onClickMenu(index) {
                if (hasSubmenu(index)) {
                    return toggleSubmenu(index);
                }
                toggleMenu();
                $state.go($scope.menu[index].callback);
            }

            function closeMenu() {
                toggleMenu();
            }

            function hasSubmenu(index) {
                return $scope.menu[index].hasOwnProperty('submenu') || $scope.menu[index].hasOwnProperty('component');
            }

            function toggleSubmenu(submenuIndex) {
                $scope.menu[submenuIndex].isOpen = !$scope.menu[submenuIndex].isOpen;
            }

            function hasSubmenuOpenClass() {
                return $scope.menu.reduce(isOpen, false) ? 'open' : '';

                function isOpen(isOpen, menu) {
                    return isOpen || menu.isOpen;
                }
            }

            function goToMenu(state) {
                $state.go(state);
            }

            function initSubmenu() {
                $scope.menu = $scope.menu.map(closeAllSubMenus);

                function closeAllSubMenus(submenu) {
                    submenu.isOpen = false;
                    return submenu;
                }
            }

            function getSubmenuOpenClass(index) {
                return $scope.menu[index].isOpen ? 'open' : '';
            }

            function toggleMenu() {
                if (isRightSideMenu()) {
                    return $ionicSideMenuDelegate.toggleRight();
                }
                return $ionicSideMenuDelegate.toggleLeft();
            }

            function isOpenMenu() {
                if (isRightSideMenu()) {
                    return $ionicSideMenuDelegate.isOpenRight();
                }
                return $ionicSideMenuDelegate.isOpenLeft();
            }

            function isRightSideMenu() {
                return $scope.side === RIGHT_SIDE_MENU;
            }

        }
    }

})();
