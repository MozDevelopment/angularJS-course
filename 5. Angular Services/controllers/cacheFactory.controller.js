(function() {
    'use strict';

    angular.module('services')
            .run(runExample)
            .controller('CacheFactoryController',CacheFactoryController);

    CacheFactoryController.$inject = ['$scope','$cacheFactory'];

    function CacheFactoryController($scope, $cacheFactory) {
        $scope.title = '$cacheFactory';
        var vm = this;
        vm.setStatus = function(msg) {
            var  prefix = ($scope.status.length +1).toString();
            $scope.status.push(prefix+": "+msg);
        }
        vm.cache = $cacheFactory.get('myExample');
        $scope.status = [];
        $scope.key = '';
        $scope.value = '';
        $scope.save = function() {
          if($scope.cacheForm.$valid) {
            if($scope.value === '') {
              vm.cache.remove($scope.key);
              vm.setStatus($scope.key+': removed');
            } else {
              vm.cache.put($scope.key, $scope.value);
              vm.setStatus($scope.key+' set to '+$scope.value);
            }
          }
          $scope.value = '';
        };

        $scope.recall = function() {
            if($scope.cacheForm.$valid) {
                var value = vm.cache.get($scope.key);
                if(value) {
                  $scope.value = value;
                  vm.setStatus("Cache hit for key :"+$scope.key);
                } else {
                  vm.setStatus('Cache miss for key :'+$scope.key)
                }
            }
        };

    }//cacheFactory

    runExample.$inject = ['$cacheFactory'];

    function runExample($cacheFactory) {
        $cacheFactory('myExample')
    }//

})();
