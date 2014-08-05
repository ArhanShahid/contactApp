var contactApp = angular.module('contactApp',['ui.router','ngRoute','ngResource','ngStorage']);
contactApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home/login');
    $stateProvider
        .state('home', {
            url:'/home',
            templateUrl: 'partials/home.html',
            controller:'homeController'
        })
        .state('home.logIn',{
            url:'/login',
            templateUrl: 'partials/logIn.html',
            controller:'logInController'
        })
        .state('home.signUp',{
            templateUrl: 'partials/signUp.html',
            controller:'signUpController'
        })
        .state('contact',{
            url:'/contact',
            templateUrl: 'partials/contact.html',
            controller:'contactController'
        })
        .state('add',{
            url:'/add',
            templateUrl: 'partials/add.html',
            controller:'addController'
        })
        .state('edit',{
            url:'/edit',
            templateUrl: 'partials/edit.html',
            controller:'editController'
        })

});

