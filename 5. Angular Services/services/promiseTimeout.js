(function() {
    'use strict';

    angular
      .module('services')
      .run(promises);

      promises.$inject = ['$rootScope','$timeout','$q'];

      function promises($rootScope, $timeout, $q) {
          var firstDeferral = $q.defer(),
              secondDeferral = $q.defer();

          $timeout(function() {
              $rootScope.status = '2 Seconds';
              firstDeferral.resolve();
          }, 2000);
          $timeout(function() {
              $rootScope.status = '3 Seconds';
              secondDeferral.resolve();
          }, 3000);
          $timeout(function() {
              $rootScope.status = 'Ready ';
              $q.all([firstDeferral.promise, secondDeferral.promise])
                    .then(function() {
                        $rootScope.status = 'All promises complete';
                    });
          });
      }//promises

})();
