'use strict';

// Declare jsapp level module which depends on views, and components
angular.module('app', [
  'ngRoute',
  'ngGrid',
  'ngResource',
  'dropDownDirectives',
  'projectServices',
  'landingPageControllers',
  'projectsControllers',
  'defineProjectControllers',
  'staffingControllers'
]).constant('dataProvider', {url: 'http://'}).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/LandingPage', {templateUrl: 'landingPage/partials/landingPage.html', controller: 'LandingPageCtrl'});
  $routeProvider.when('/Projects', {templateUrl: 'projects/partials/projects.html', controller: 'ProjectsCtrl'});
  $routeProvider.when('/DefineProject', {templateUrl: 'defineProject/partials/defineProject.html', controller: 'DefineProjectCtrl'});
  $routeProvider.when('/Staffing', {templateUrl: 'staffing/partials/staffing.html', controller: 'StaffingCtrl'});
  $routeProvider.otherwise({redirectTo: '/LandingPage'});
}]).value('activeMenu', {href: "#/LandingPage"});
