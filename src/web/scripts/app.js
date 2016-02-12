angular.module("test", [
        'basic.app',
        'blueimp.fileupload'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {templateUrl: 'partials/index.html'})
    }])
    .controller('TestUploadController', ['$scope', 'config', function ($scope, config) {
        var partition = 'test/';
        var endpoint = config.baseUri + "api/image/" + partition + '?imageType=foreground&namespace=' + config.namespace;

        $scope.options = {
            url: endpoint,
            type: 'PUT',
            headers: {
                'X-Namespace': config.namespace
            },
            xhrFields: {
                withCredentials: true
            }
        };
    }]);