'use strict';

angular.module('app', [
  'ngRoute',
  'ngGrid',
  'ngResource',
  'dropDownDirectives',
  'projectServices',
  'staffingServices',
  'laborCategoryServices',
  'landingPageControllers',
  'projectsControllers',
  'defineProjectControllers',
  'staffingControllers'
]).constant('dataProvider', {url: 'http://'}).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/LandingPage', {templateUrl: 'static/landingPage/partials/landingPage.html', controller: 'LandingPageCtrl'});
  $routeProvider.when('/Projects', {templateUrl: 'static/projects/partials/projects.html', controller: 'ProjectsCtrl'});
  $routeProvider.when('/DefineProject', {templateUrl: 'static/defineProject/partials/defineProject.html', controller: 'DefineProjectCtrl'});
  $routeProvider.when('/Staffing', {templateUrl: 'static/staffing/partials/staffing.html', controller: 'StaffingCtrl'});
  $routeProvider.otherwise({redirectTo: '/LandingPage'});
}]).value('activeMenu', {href: "#/LandingPage"});
