(function() {
    'use strict';

    var app = angular.module('multipleController', []);

    app.controller('OuterController', function($scope) {
        $scope.a = 1;
        $scope.b =2;
    });

    app.controller('InnerController', function($scope) {

    })

    app.controller('InnerMostController', function($scope) {
      $scope.b =3;
    });

})();
