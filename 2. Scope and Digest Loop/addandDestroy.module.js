(function() {
    'use strict';

    var app = angular.module('destroyEvents', []);

    app.controller('DestroyController', DestroyController);

    DestroyController.$inject = ['$scope'];

    function DestroyController($scope) {
       $scope.list = [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}]
       $scope.add = function() {
          $scope.list.push({
            value: $scope.list.length + 1
          });
       }
    }//detroyController

    app.controller('InnerController', InnerController);

    InnerController.$inject = ['$scope'];

    function InnerController($scope) {
       $scope.$parent.destroy = function() {
          $scope.$destroy();
       }

    }//innerController

})();
