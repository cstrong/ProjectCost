'use strict';

angular.module('projectsControllers', []).
    controller('ProjectsCtrl', ['$scope', 'Projects', 'activeMenu'/*, '$q', '$timeout'*/, function ($scope, Projects, activeMenu/*, $q, $timeout @todo: testing only - remove */) {
        activeMenu.href = location.hash;
        var errorProjects = function (reason) {
            // @todo: error handling
        }
        var successProjects = function (data) {
            $scope.projects = data.result;
        }
/*
        var deferred = $q.defer();
        var promise = deferred.promise;
        var Projects = {
            queryWC: function () {
                return {$promise: promise}
            }
        };
*/
        Projects.queryWC().$promise.then(successProjects, errorProjects);
/*
        $timeout(angular.bind({deferred: deferred}, function () {
            this.deferred.resolve({
                "result": [
                    {
                        "basePeriodDuration": "6 Months",
                        "escalationRate": "1.5%",
                        "estimatedValue": "$33,002,133.00",
                        "geoLocation": "10001",
                        "laborModel": "Alliant",
                        "optionPeriodDuration": "3 Months",
                        "optionPeriodsNumber": 1,
                        "projectId": "abc",
                        "projectName": "Project Cost",
                        "projectType": "Information System",
                        "size": "Medium"
                    },
                    {
                        "basePeriodDuration": "1 Year",
                        "escalationRate": "1.75%",
                        "estimatedValue": "$23,302,338.00",
                        "geoLocation": "10001",
                        "laborModel": "Alliant",
                        "optionPeriodDuration": "3 Months",
                        "optionPeriodsNumber": 3,
                        "projectId": "def",
                        "projectName": "HourGlass",
                        "projectType": "Information System",
                        "size": "Small"
                    }
                ]
            });
        }));
*/

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
