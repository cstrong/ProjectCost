'use strict';

angular.module('staffingControllers', []).
    controller('StaffingCtrl', ['$scope', 'Projects', 'activeMenu', '$q', '$timeout', function ($scope, Projects, activeMenu, $q, $timeout /* @todo: testing only - remove */) {
        activeMenu.href = location.hash;
    }])