(function() {
    'use strict';

    angular
        .module('services')
        .controller('LocationController', LocationController);

        LocationController.$inject = ['$scope', '$location'];

        function LocationController($scope, $location) {
            $scope.title = '$location';
            var vm = this;
            vm.$location = $location;
            vm.getLocationInfo = function() {
                return {
                  'absolute_Url': vm.$location.absUrl(),
                  'hash': vm.$location.hash(),
                  'host': vm.$location.host(),
                  'path': vm.$location.path(),
                  'port': vm.$location.port(),
                  'protocol': vm.$location.search(),
                  'url': vm.$location.url()
                };
            };

            $scope.locationInfo = vm.getLocationInfo();

            $scope.$on('$locationChangeStart', function () {
                $scope.locationInfo = vm.getLocationInfo();
            });
            $scope.route = function() {
              $location.path('/relative-path-no-route');
            };
            $scope.hash = function() {
              $location.hash('someHasTag');
            };
            $scope.search = function() {
              $location.search('query', 'value');
            };
            $scope.url = function() {
              $location.url('/');
            };


        }//locaitonController
})();
