angular.module('projectServices', ['ngResource']).factory('Projects', ['$resource', 'dataProvider', function($resource, dataProvider) {
    return $resource(dataProvider.url + '/Projects/:id', null, {
        'queryWC': {method: 'Get', withCredentials: true, isArray: false}
    });
}])
