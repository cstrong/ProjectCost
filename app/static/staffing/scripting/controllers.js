'use strict';

angular.module('staffingControllers', []).
    controller('StaffingCtrl', ['$scope', 'Staffing', 'LaborCategory', 'activeMenu', '$q', '$timeout', function ($scope, Staffing, LaborCategory, activeMenu, $q, $timeout /* @todo: testing only - remove */) {
        activeMenu.href = location.hash;
        var errorStaffingTemplate = function (reason) {
            // @todo: error handling
        }
        var successStaffingTemplate = function (data) {
            $scope.staffing = data;
        }
        var deferred = $q.defer();
        var promise = deferred.promise;
        var Projects = {
            queryWC: function () {
                return {$promise: promise}
            }
        };
        Projects.queryWC().$promise.then(successStaffingTemplate, errorStaffingTemplate);
        $timeout(angular.bind({deferred: deferred}, function () {
            this.deferred.resolve([
                {
                    laborCategory: 'Project Manager',
                    quantity: 1,
                    averageRate: 160.00,
                    annualHours: 1660,
                    cost: 265600.00
                },
                {
                    laborCategory: 'QA Engineer',
                    quantity: 1,
                    averageRate: 67.50,
                    annualHours: 1660,
                    cost: 112050.00
                },
                {
                    laborCategory: 'Developer',
                    quantity: 3,
                    averageRate: 90.50,
                    annualHours: 1920,
                    cost: 518400.00
                },
                {
                    laborCategory: 'Security Engineer',
                    quantity: 1,
                    averageRate: 120.50,
                    annualHours: 580,
                    cost: 69600.00
                }]);
        }));

        $scope.updateCost = function(entity) {
            entity.cost = entity.quantity * entity.averageRate * entity.annualHours;
        }

        var numberEditor = '<input id="editor" type="number" min="1" ng-class="\'colt\' + col.index" ng-input="COL_FIELD" ng-model="COL_FIELD" ng-change="updateCost(row.entity)"/>';
        $scope.staffingOptions = {
            data: 'staffing',
            enableCellSelection: true,
            enableRowSelection: false,
            enableCellEditOnFocus: true,
            beforeSelectionChange: function(rowItem, event) {
                var editor = document.getElementById('editor');
                var cClass = event.target.className.match(/col(\d+)/);
                if (editor != null && cClass != null) {
                    editor.style.width = ($scope.staffingOptions.$gridScope.columns[cClass[1] - 0].width - 2) + 'px';
                }
            },
            columnDefs: [
                {field: 'laborCategory', displayName: 'Labor Category', width: '250px', enableCellEdit: false},
                {field: 'quantity', displayName: 'Quantity', width: '75px', enableCellEdit: true, editableCellTemplate: numberEditor},
                {field: 'averageRate', displayName: 'Average Rate', width: '120px', enableCellEdit: false},
                {field: 'annualHours', displayName: 'Annual Hours', width: '120px', enableCellEdit: true, editableCellTemplate: numberEditor},
                {field: 'cost', displayName: 'Cost', width: '120px', enableCellEdit: false},
                {field: 'laborCategory', displayName: '', width: '130px', enableCellEdit: false, cellTemplate: '<a><span class="glyphicon glyphicon-th-list"> <label class="gridLink">LCAT list</label></a>'}
            ]
        };
    }])