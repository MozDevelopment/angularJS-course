(function() {
    'use strict';

    angular
      .module('services')
      .controller('ParSeController', ParSeController);

      ParSeController.$inject = ['$scope', '$parse'];

      function ParSeController($scope, $parse) {
          $scope.title = '$parse';
          $scope.json = {
              name: 'Lar Lemos',
              birthYear: 1974,
              height: 179.07,
              home: {
                city: 'Maputo City',
                state: 'Maputo'
              }
          };
          $scope.expression = 'home.city | uppercase';
          $scope.parse = function() {
              var fn = $parse($scope.expression);
              $scope.result = fn($scope.json);
          };
      }//parseController
})();
