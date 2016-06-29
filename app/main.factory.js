(function() {
    'use strict';

    angular
        .module('errApp')
        .factory('MainFactory', MainFactory);

    MainFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function MainFactory($http, $q) {
        var service = {
            getFile: getFile
        };
        return service;

        ////////////////

        function getFile() {
            var defer = $q.defer();

            $http({
                method: 'GET',
                url: 'app/topspots.json'
            }).then(function(response) {
                    if (typeof response.data === 'object') {
                        defer.resolve(response);
                    } else {
                        defer.reject("No data found!");
                    }
                },
                function(error) {
                    defer.reject(error);
                });
            return defer.promise;
        }
    }
})();
