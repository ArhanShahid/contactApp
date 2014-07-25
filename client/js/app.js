
var contactApp = angular.module('contactApp',['ui.router']);
contactApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home', templateUrl: 'partials/home.html', controller:'homeController'
        });
});

