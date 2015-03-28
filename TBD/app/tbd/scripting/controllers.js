'use strict';

angular.module('tbdControllers', []).
    controller('TbdCtrl', ['$scope', function($scope) {
        $scope.menus = [{caption: 'Define Project', href: "#/DefineProject", active: false}];
        $scope.setActive = function(menu) {
            $scope.menus.forEach(function(m) {
                m.active = menu.href == m.href;
            })
        }
    }]);
