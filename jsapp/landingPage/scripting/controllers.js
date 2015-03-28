'use strict';

angular.module('landingPageControllers', []).
    controller('LandingPageCtrl', ['$scope', 'Projects', '$q', '$timeout', function($scope, Projects, $q, $timeout /* @todo: testing only - remove */) {
        $scope.projects = [];
        $scope.menus = [{caption: 'Define Project', href: "#/DefineProject", active: false}];
        $scope.setActive = function(menu) {
            $scope.menus.forEach(function(m) {
                m.active = menu.href == m.href;
            })
        }
        var errorProjects = function(reason) {
            // @todo: error handling
        }
        var successProjects = function(data) {
            $scope.projects = data;
        }
        var deferred = $q.defer();
        var promise = deferred.promise;
        var Projects = {queryWC: function() { return {$promise: promise}}};
        Projects.queryWC().$promise.then(successProjects, errorProjects);
        $timeout(angular.bind({deferred: deferred}, function() {
            this.deferred.resolve([
                {
                    projectName: 'Project Cost',
                    geoLocation: '10001',
                    projectType: 'Information System',
                    laborModel: 'Alliant',
                    basePeriodDuration: '6 Months',
                    optionPeriodsNumber: 1,
                    optionPeriodDuration: '3 Months'
                },
                {
                    projectName: 'HourGlass',
                    geoLocation: '10001',
                    projectType: 'Information System',
                    laborModel: 'Alliant',
                    basePeriodDuration: '1 Year',
                    optionPeriodsNumber: 3,
                    optionPeriodDuration: '3 Months'
                }            ]);
        }));
    }]);
