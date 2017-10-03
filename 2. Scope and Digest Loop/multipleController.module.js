(function() {
    'use strict';

    var app = angular.module('multipleCtrl', []);

      app.controller('OuterController', function($scope) {
        $scope.name = 'John Doe';
        $scope.person = {
          name: 'John Doe'
        };
        $scope.personOverride = {
          name: 'John Doe'
        };
      });

      app.controller('InnerController', function($scope) {
          $scope.personOverride = {
            name: 'Jane Smith'
          };
      });

})();
