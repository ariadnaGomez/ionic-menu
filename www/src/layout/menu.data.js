(function() {
    'use strict';

    angular
        .module('app.menu')
        .service('menuData', menuData);

    /* @ngInject */
    function menuData() {

        return {
            getMenu: getMenu
        };

        function getMenu () {
            return [
                {
                    title: 'Inicio',
                    icon: 'ion-ios-home',
                    state: ''
                },
                {
                    title: 'Sobre nosotros',
                    icon: 'ion-information-circled',
                    submenu: [
                        {
                            title: 'Sopra Steria en breve',
                            icon: 'ion-ios-pie',
                            state: ''
                        },
                        {
                            title: 'Oficinas',
                            icon: 'ion-android-map',
                            state: ''
                        },
                        {
                            title: 'Cifras relevantes',
                            icon: 'ion-ios-analytics',
                            state: ''
                        },
                        {
                            title: 'Partners estratégicos',
                            icon: 'ion-ios-people',
                            state: ''
                        },
                        {
                            title: 'Innovación',
                            icon: 'ion-ios-flask',
                            state: ''
                        },
                        {
                            title: 'Historia',
                            icon: 'ion-ios-book',
                            state: ''
                        }

                    ]
                },
                {
                    title: 'Sectores',
                    icon: 'ion-ios-world',
                    submenu: [
                        {
                            title: 'Aerospace',
                            icon: 'ion-plane',
                            state: ''
                        },
                        {
                            title:'Seguros',
                            icon: 'ion-lock-combination',
                            state: ''
                        },
                        {
                            title: 'Banca',
                            icon: 'ion-briefcase',
                            state: ''
                        },
                        {
                            title: 'Telecomunicaciones',
                            icon: 'ion-network',
                            state: ''
                        },
                        {
                            title: 'Energía',
                            icon: 'ion-battery-half',
                            state: '',
                        }

                    ]
                },
                {
                    title: 'Oferta',
                    icon: 'ion-filing',
                    submenu: [
                        {
                            title: 'Redes sociales',
                            icon: 'ion-android-share-alt',
                            state: ''
                        },
                        {
                            title: 'Software Bancario',
                            icon: 'ion-ipad',
                            state: ''

                        },
                        {
                            title: 'Cloud',
                            icon: 'ion-ios-cloud-upload',
                            state: ''
                        },
                        {
                            title: 'Movilidad',
                            icon: 'ion-android-bus',
                            state: ''
                        }

                    ]
                },
                {
                    title: 'Noticias',
                    icon: 'ion-ios-paper',
                    state: '',
                    component: 'header-section',
                },
                {
                    title: 'Eventos',
                    icon: 'ion-ios-calendar',
                    state: ''
                }
            ];
        }

    }
})();
