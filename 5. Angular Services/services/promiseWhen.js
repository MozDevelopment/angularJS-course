(function() {
    'use strict';

    angular
      .module('services')
      .service('noPromise', noPromise)
      .service('promise', promise)
      .run(appRun);

      noPromise.$inject = [];

      function noPromise() {
          return {
              getResult: function() {
                  return {  status: 'noPromise' };
              }
          };
      }//noPromise

      promise.$inject = ['$q','$timeout'];

      function promise($q, $timeout){
          return {
              getResult: function() {
                  var deferral = $q.defer();
                  $timeout(function() {
                      deferral.resolve({status: 'promise'});
                  }, 1000);
                  return deferral.promise;
              }
          }
      }//promise

      appRun.$inject = ['$rootScope','$q','noPromise','promise'];

      function appRun($rootScope, $q, noPromise, promise) {
          $rootScope.status = 'Ready';
          $q.when(noPromise.getResult())
            .then(function(result) {
                $rootScope.status = result.status;
          });
          $q.when(promise.getResult())
            .then(function(result) {
                $rootScope.status = result.status;
          });

      }//appRun



})();
