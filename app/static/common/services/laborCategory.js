angular.module('laborCategoryServices', ['ngResource']).factory('LaborCategory', ['$resource', 'dataProvider', function($resource, dataProvider) {
    return $resource(dataProvider.url + '/LaborCategory/:id', null, {
        'queryWC': {method: 'Get', withCredentials: true}
    });
}])
