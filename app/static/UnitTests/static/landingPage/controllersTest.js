describe('LandingPageCtrl', function () {
    beforeEach(module('app'));
    it('should set active menu', inject(function ($controller, $q, $rootScope) {
        var scope = {};
        var deferred = $q.defer();
        var promise = deferred.promise;
        var projects = {
            queryWC: function () {
                return {$promise: promise}
            }
        };
        scope.$watchCollection = function(property, handler) {};
        $controller('LandingPageCtrl', {$scope: scope, Projects: projects, activeMenu: {}});
        scope.setActive({href: "#/Projects"});
        expect(scope.menus[0].active).toBeFalsy();
        expect(scope.menus[1].active).toBeTruthy();
        expect(scope.menus[2].active).toBeFalsy();
    }))
})
