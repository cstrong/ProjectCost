angular.module('staffingServices', ['ngResource']).factory('Staffing', ['$resource', 'dataProvider', function($resource, dataProvider) {
    return $resource(dataProvider.url + '/Staffing/:id', null, {
        'queryWC': {method: 'Get', withCredentials: true}
    });
}])
