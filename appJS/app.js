'use strict';

// Declare appJS level module which depends on views, and components
angular.module('app', [
  'ngRoute',
  'ngGrid',
  'ngResource',
  'dropDownDirectives',
  'landingPageControllers',
  'landingPageServices',
  'DefineProjectControllers'
]).constant('dataProvider', {url: 'http://'}).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/LandingPage', {templateUrl: 'landingPage/partials/landingPage.html', controller: 'LandingPageCtrl'});
  $routeProvider.when('/DefineProject', {templateUrl: 'defineProject/partials/defineProject.html', controller: 'DefineProjectCtrl'});
  $routeProvider.otherwise({redirectTo: '/LandingPage'});
}]);
