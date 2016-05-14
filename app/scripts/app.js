'use strict';

/**
 * @ngdoc overview
 * @name webApp001App
 * @description
 * # webApp001App
 *
 * Main module of the application.
 */
 angular
 .module('webApp001App', [
         'ngAnimate',
         'ngCookies',
         'ngResource',
         'ngRoute',
         'ngSanitize',
         'ngTouch'
         ])
 .config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  })
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl',
    controllerAs: 'about'
  })
  .when('/contact', {
    templateUrl: 'views/contact.html',
    controller: 'ContactCtrl',
    controllerAs: 'contact'
  })
  .when('/test', {
    templateUrl: 'views/test.html',
    controller: 'TestCtrl',
    controllerAs: 'test'
  })
  .otherwise({
    redirectTo: '/'
  });
});
