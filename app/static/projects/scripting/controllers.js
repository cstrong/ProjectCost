'use strict';

angular.module('projectsControllers', []).
    controller('ProjectsCtrl', ['$scope', 'Projects', 'activeMenu', '$q', '$timeout', function ($scope, Projects, activeMenu, $q, $timeout /* @todo: testing only - remove */) {
        activeMenu.href = location.hash;
        var errorProjects = function (reason) {
            // @todo: error handling
        }
        var successProjects = function (data) {
            $scope.projects = data;
        }
        var deferred = $q.defer();
        var promise = deferred.promise;
        var Projects = {
            queryWC: function () {
                return {$promise: promise}
            }
        };
        Projects.queryWC().$promise.then(successProjects, errorProjects);
        $timeout(angular.bind({deferred: deferred}, function () {
            this.deferred.resolve([
                {
                    projectId: 'abc',
                    projectName: 'Project Cost',
                    geoLocation: '10001',
                    projectType: 'Information System',
                    laborModel: 'Alliant',
                    basePeriodDuration: '6 Months',
                    optionPeriodsNumber: 1,
                    optionPeriodDuration: '3 Months',
                    size: 'Medium',
                    escalationRate: '1.5%',
                    estimatedValue: '$33,002,133.00'
                },
                {
                    projectId: 'def',
                    projectName: 'HourGlass',
                    geoLocation: '10001',
                    projectType: 'Information System',
                    laborModel: 'Alliant',
                    basePeriodDuration: '1 Year',
                    optionPeriodsNumber: 3,
                    optionPeriodDuration: '3 Months',
                    size: 'Small',
                    escalationRate: '1.75%',
                    estimatedValue: '$23,302,338.00'
                }]);
        }));

        $scope.projectsOptions = {
            data: 'projects',
            multiSelect: false,
            columnDefs: [
                {field: 'projectName', displayName: 'Name', width: '400px'},
                {field: 'geoLocation', displayName: 'Region', width: '120px'},
                {field: 'projectType', displayName: 'Type', width: '200px'},
                {field: 'size', displayName: 'Size', width: '100px'},
                {field: 'laborModel', displayName: 'Labor Model', width: '120px'},
                {field: 'basePeriodDuration', displayName: 'Base Period', width: '120px'},
                {field: 'optionPeriodsNumber', displayName: 'Options', width: '100px'},
                {field: 'escalationRate', displayName: 'Escalation', width: '120px'},
                {field: 'estimatedValue', displayName: 'Estimated Value', width: '200px'}
            ]
        };
    }])
