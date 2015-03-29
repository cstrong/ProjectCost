angular.module('dropDownDirectives', []).directive('dropDown', [function() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {options: '=', optionSelected: '='},
        templateUrl: 'static/common/partials/dropDown.html',
        link: function(scope, element, attrs, ctrl) {
            scope.selectOption = function(option) {
                if (!option.disabled) {
                    scope.optionSelected = option;
                }
            }

            scope.isDisabled = function(option) {
                return (option.disabled ? 'disabled' : '');
            }
        }
    }
}])
