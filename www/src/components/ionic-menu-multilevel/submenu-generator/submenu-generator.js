(function () {
    'use strict';

    angular
        .module('app.menu-slide')
        .directive('submenuGenerator', submenuGenerator);

    /* @ngInject */
    function submenuGenerator($compile) {
        return {
            restrict : 'A',
            scope : {
                submenu: '='
            },
            link : Link,
        };

        function Link (scope, element) {

            var type = scope.submenu.component;

            if (angular.isUndefined(type)) {
                type = 'submenu-list';
            }
            var generatedTemplate = '<div ' + type +
                ' menu-item="submenu"></div>';
            element.append($compile(generatedTemplate)(scope));
        }
    }

})();
