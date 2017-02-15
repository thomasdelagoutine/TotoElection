/**
 * Created by Thomas on 17/06/2016.
 */
var app = angular.module('ovrApp', ['ngRoute']);

app.config(['$routeProvider',
    function($routeProvider) {

        // Système de routage
        $routeProvider
            .when('/home', {
                templateUrl: 'views/home.html',
                controller: 'mainCtrl'
            })
            .when('/connexion', {
                templateUrl: 'views/connexion.html',
                controller: 'authController'
            })
            .otherwise({
                redirectTo: '/connexion'
            });
    }
]);
