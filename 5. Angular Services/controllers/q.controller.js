(function() {
    'use strict';

    angular
      .module('services')
      .controller('QController', QController);

      QController.$inject = ['$scope','primes','maxPrimes'];

      function QController($scope, primes, maxPrimes) {
          $scope.title = '$';
          $scope.started = false;
          $scope.primes = [];
          $scope.max = maxPrimes;
          $scope.progress = 0;
          $scope.compute = function() {
              $scope.started = true;
              primes.computePrimes(maxPrimes)
                    .then(function(data) {
                        $scope.primes = data;
                    },
                    function(error) {
                      throw error;
                    },
                    function(progress) {
                      $scope.value = progress;
                    });
                    // .catch(function(data) {
                    //
                    // });

          };
      }//QController

})();
