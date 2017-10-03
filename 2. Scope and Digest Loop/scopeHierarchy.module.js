(function() {
    'use strict';

    var app = angular.module('scopeHierarchy', []);

    app.controller('OuterController', OuterController);

    OuterController.$inject = ['$scope'];

    function OuterController($scope) {
      console.log("OuterController");
      $scope.a = 1;
      $scope.b = 2;
    }//OuterController

    app.controller('InnerController', InnerController);

    InnerController.$injec = ['$scope'];

    function InnerController() {

    }//InnerController

    app.controller('InnerMostController', InnerMostController);

    InnerMostController.$injec = ['$scope'];

    function InnerMostController($scope) {
      $scope.b = 3;

        var oldLoad = window.onLoad;

        window.onload = function() {
          var spanElement = document.getElementById('innerSpan');
          var scope = angular.element(spanElement).scope();
          spanElement.innerHTML = scope.$eval('a+b');
        }
    }//InnerMostController

})();
