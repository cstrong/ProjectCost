'use strict';

angular.module('DefineProjectControllers', []).
    controller('DefineProjectCtrl', ['$scope', function($scope) {
        $scope.projectTypeSelected = {id: -1, caption: 'Select Project Type'};
        $scope.projectTypes = [{id: '0', caption: 'Information System', disabled: false},
            {id: '1', caption: 'Construction', disabled: true}];
        $scope.isProjectDisabled = function(projectType) {
            return (projectType.disabled ? 'disabled' : '');
        }
        $scope.selectProjectType = function(projectType) {
            if (!projectType.disabled) {
                $scope.projectTypeSelected = projectType;
            }
        }

        $scope.laborModelSelected = {id: -1, caption: 'Select Labor Model'};
        $scope.laborModels = [{id: '0', caption: 'Alliant', disabled: false},
            {id: '1', caption: 'Oasis', disabled: true}];
        $scope.isLaborModelDisabled = function(laborModel) {
            return (laborModel.disabled ? 'disabled' : '');
        }
        $scope.selectLaborModel = function(laborModel) {
            if (!laborModel.disabled) {
                $scope.laborModelSelected = laborModel;
            }
        }

        $scope.basePeriodDurationSelected = {id: -1, caption: 'Select Base Period Duration'};
        $scope.basePeriodDurations = [{id: '0', caption: '3 Month'},
            {id: '1', caption: '6 Month'},
            {id: '2', caption: '1 Year'}];
        $scope.selectBasePeriodDuration = function(basePeriodDuration) {
            $scope.basePeriodDurationSelected = basePeriodDuration;
        }

        $scope.optionPeriodDurationSelected = {id: -1, caption: 'Select Option Period Duration'};
        $scope.optionPeriodDurations = [{id: '0', caption: '3 Month'},
            {id: '1', caption: '6 Month'},
            {id: '2', caption: '1 Year'}];
        $scope.selectOptionPeriodDuration = function(optionPeriodDuration) {
            $scope.optionPeriodDurationSelected = optionPeriodDuration;
        }
    }]);
