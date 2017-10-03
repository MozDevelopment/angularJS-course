(function() {
    'use strict';

    angular.module('services')
           .controller('ServicesController', ServicesController);

    ServicesController.$inject = ['$scope', '$window', '$locale'];

    function ServicesController($scope, $window, $locale) {
      $scope.title = 'Table of Contents';

      $scope.list = [
        '$anchorScroll','$cacheFactory','$compile','$exceptionHandler',
        '$interpolate','$interval','$location','$parse','$q'
      ];
      $scope.go = function(listItem) {
        $window.location.href = "pages/"+listItem.substring(1)+".html";
      };
      $scope.locale = $locale.id;
    }//servicesController


})();
