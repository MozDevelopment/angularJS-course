(function() {
    'use strict';

    var app = angular.module('scopeEvents', []);

    app.controller('EventsController', OuterController);

    OuterController.$inject = ['$scope', '$timeout'];

    function OuterController($scope, $timeout) {
        $scope.value1 = "Initial";
        $scope.value2 = "Initial";
        $scope.value3 = "Initial";

        setTimeout(function() {
          $scope.value1 = 'Updated';
        }, 2000);

        setTimeout(function() {
            $scope.$apply(function() {
              $scope.value2 = 'Updated';
            });
        }, 1000);

        $timeout(function() {
            $scope.value3 = 'Updated';
        }, 500);

        setTimeout(function() {
            $scope.$digest();
        }, 5000);

    }

})();
