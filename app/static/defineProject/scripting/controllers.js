'use strict';

angular.module('defineProjectControllers', []).
    controller('DefineProjectCtrl', ['$scope', 'activeMenu', function($scope, activeMenu) {
        activeMenu.href = '';
        $scope.projectTypeSelected = {id: -1, caption: 'Select Project Type'};
        $scope.projectTypes = [{id: '0', caption: 'Information System', disabled: false},
            {id: '1', caption: 'Construction', disabled: true}];

        $scope.laborModelSelected = {id: -1, caption: 'Select Labor Model'};
        $scope.laborModels = [{id: '0', caption: 'Alliant', disabled: false},
            {id: '1', caption: 'Oasis', disabled: true}];

        $scope.basePeriodDurationSelected = {id: -1, caption: 'Select Base Period Duration'};
        $scope.basePeriodDurations = [{id: '0', caption: '3 Months'},
            {id: '1', caption: '6 Months'},
            {id: '2', caption: '1 Year'}];

        $scope.optionPeriodDurationSelected = {id: -1, caption: 'Select Option Period Duration'};
        $scope.optionPeriodDurations = [{id: '0', caption: '3 Months'},
            {id: '1', caption: '6 Months'},
            {id: '2', caption: '1 Year'}];
    }]);
