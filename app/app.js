'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
  'ngRoute',
  'ngGrid',
  'ngResource',
  'dropDownDirectives',
  'tbdControllers',
  'DefineProjectControllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Tbd', {templateUrl: 'tbd/partials/tbd.html', controller: 'TbdCtrl'});
  $routeProvider.when('/DefineProject', {templateUrl: 'defineProject/partials/defineProject.html', controller: 'DefineProjectCtrl'});
  $routeProvider.otherwise({redirectTo: '/Tbd'});
}]);
