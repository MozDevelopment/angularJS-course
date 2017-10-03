(function() {
    'use strict';

    angular
      .module('services')
      .controller('ExceptionHandlerController', ExceptionHandlerController);


      ExceptionHandlerController.$inject = ['$scope'];

      function ExceptionHandlerController($scope) {
          $scope.title = '$exceptionHandler';
          $scope.oops = function() {
              throw new Error('Oops');
          };
      }//exceptionHandlerController

})();
