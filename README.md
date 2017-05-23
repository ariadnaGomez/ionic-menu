Ionic Modular Seed
==================

## Demo

https://codepen.io/ariadnaGomez/pen/QvJXXw

## Requirements

* AngularJS 1.5+
* Ionic 1.3+

## Installing

* NPM ( npm install ionic-menu-bower --save )
* Bower ( bower install ionic-menu --save )

<script src="ionic-menu.min.js"></script>
<link rel="stylesheet" type="text/css" href="ionic-menu.min.css">

## Usage

1. Add the custom element <ionic-menu> to the HTML after <ion-side-menu-content></ion-side-menu-content>
2. Set up the options to enable the menu options you need.
3. You can override the header and footer of the menu.


## Configuration

### Parameters

Name | Type | Description | Example
--- | --- | --- | ---
side | string | Set's the side where the menu will be rendered | `left` `right`
logoPath | string | path to the image to show in the header | `path/to/img`
menu | array | Menu options Configuration | see next paragraph
title | string | Title to show after the logo image | `Mi awesome title`
version | string | Text to show in the predefined footer | `Version 1.0.0`

### Menu options Configuration

* To configure a one level menu-option you should set the next object:

```
{
    title: 'Title to show in the list',
    icon: 'class', // Class to add to the icon
    state: 'state.to.redirect' // state to redirect when clicked
}
```

* To configure a two level menu-option you should set the next object:

```
{
    title: 'Two level menu option',
    icon: 'class',
    submenu: [ // This is the list of options to open in the second menu.
        {
            title: 'Second menu level. First option',
            icon: 'awesome-icon icon',
            state: 'state.to.redirect'
        },
        {
            title: 'Second menu level. Second option',
            icon: 'awesome-icon icon',
            state: 'state.to.redirect'
        }
    ]
}
```

* Instead of a list menu you could show a custom directive in the second level.

```
{
    title: 'Second menu level. Second option',
    icon: 'awesome-icon icon',
    component: 'custom-directive', // This option will render <div custom-directive menu-item="data"></div>
    extraData: {} // This is optional if you need extra data in the custom diretive we just defined.
}
```

The custom directive will receive al directive parameter menu-item the object we just defined. So you can add extra data if needed.

### Header & Footer

You can override menu-header and menu-footer to show whatever you want.

```
<ionic-menu>
    <menu-header>This is my awesome header!!</menu-header>
    <menu-footer>This is my awesome footer!!</menu-footer>
</ionic-menu>
```

## Example

```
<html>
<head>
    <script src="ionic.bundle.js"></script>
    <script src="ionic-menu.min.js"></script>
    <link rel="stylesheet" type="text/css" href="ionic-menu.min.css">
    <script>
        angular.module('myApp', ['app.ionic-menu'])
            .controller('MyCtrl', function($scope, $http) {
                $scope.menu = [
                    {
                        title: 'Home',
                        icon: 'ion-ios-home',
                        state: ''
                    },
                    {
                        title: 'About us',
                        icon: 'ion-information-circled',
                        submenu: [
                            {
                                title: 'The company',
                                icon: 'ion-ios-pie',
                                state: ''
                            },
                            {
                                title: 'Our offices',
                                icon: 'ion-android-map',
                                state: ''
                            }
                        ]
                    },
                    {
                        title: 'News',
                        icon: 'ion-ios-paper',
                        state: '',
                        component: 'custom-directive',
                        extradata: {}
                    }
                ];
                $scope.side = 'right';
                $scope.logoPath = 'http://image.path';
            });
    </script>
</head>
<body ng-app="myApp" ng-controller="MyCtrl">
    <ionic-menu side="side" menu="menu" logo-path="logoPath"></ionic-menu>
</body>
</html>
```
