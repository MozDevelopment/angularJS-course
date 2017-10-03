(function() {
    'use strict';

    var app = angular.module('scopeMessages', []);

    app.controller('OuterController', OuterController);

    // OuterController.$inject = ['$scope'];

    function OuterController($scope) {
      var message = 'Outer';
      $scope.message = message;
      $scope.$on('message', function(e, message) {
          $scope.message = message;
      });
      $scope.broadcast = function() { $scope.$broadcast('message', message); }
      // $scope.emit = function() { $scope.emit('message', message); }

    }//outerController
    app.controller('InnerController', InnerController);

    // InnerController.$inject = ['$scope'];

    function InnerController($scope) {
      var message = 'Inner';
      $scope.message = message;
      $scope.$on('message', function(e, message) {
          $scope.message = message;
      });
      $scope.broadcast = function() { $scope.$broadcast('message', message); }
      // $scope.emit = function() { $scope.emit('message', message); }

    }//outerController

    app.controller('InnerMostController', InnerMostController);

    // InnerMostController.$inject = ['$scope'];

    function InnerMostController($scope) {
      var message = 'InnerMost';
      $scope.message = message;
      $scope.$on('message', function(e, message) {
          $scope.message = message;
      });
      $scope.broadcast = function() { $scope.$broadcast('message', message); }
      $scope.emit = function() { $scope.emit('message', message); }

    }//outerController

})();
