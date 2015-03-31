'use strict';

angular.module('landingPageControllers', []).
    controller('LandingPageCtrl', ['$scope', 'Projects', 'activeMenu'/*, '$q', '$timeout'*/, function ($scope, Projects, activeMenu/*, $q, $timeout @todo: testing only - remove */) {
        activeMenu.href = location.hash;
        $scope.projects = [];
        $scope.activeMenu = activeMenu;
        $scope.menus = [
            {caption: 'Home', href: "#/LandingPage", active: true},
            {caption: 'Projects', href: "#/Projects", active: false},
            {caption: 'Site News', href: "#/SiteNews", active: false}
        ];
        $scope.setActive = function (menu) {
            $scope.menus.forEach(function (m) {
                m.active = menu.href == m.href;
            })
        }
        var errorProjects = function (reason) {
            // @todo: error handling
        }
        var successProjects = function (data) {
            $scope.projects = data.result;
        }

        $scope.$watchCollection('activeMenu', function(newValue, oldValue) {
            if (newValue.href == oldValue.href) return;
            $scope.menus.forEach(function(menu) {
                menu.active = menu.href == newValue.href;
            });
        })
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
    }]);
