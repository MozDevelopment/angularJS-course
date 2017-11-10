(function() {
    'use strict';

      angular.module('webservices')
          .factory('contacts', contacts);

          contacts.$inject = ['$http', '$q'];

          function contacts($http, $q) {
              var vm = this;

              vm._notify = [];
              vm._$q = $q;
              vm._$http = $http;``

          }

          contacts.prototype.subscrib = function(callback) {
              vm._notify.push(callback);
          }

          contacts.prototype.publis = function() {
              var i;
              for(i=0; i< vm._notify.length; i++) {
                  vm._notify[i]();
              }
          }

          contacts.prototype.addContact = function(contact) {
              var deferred = vm._$q.defer(), _this = this;
              this._$http.post(vm._url, contact)
                    .then(function(result) {
                        deferred.resolve(result.data);
                        vm.publish();
                    })
                    .catch(function(rejection) {
                        deferred.reject(rejection)
                    });
              return deferred.promise;
          };

          contacts.prototype.listContacts = function() {
                var deferred  = vm._$q.defer();
                vm._$http.get(vm._url)
                  .then(function(result) {
                      deferred.resolve(result.data);
                  }).catch(function(rejection) {
                      deferred.reject(rejection);
                  });
                return deferred.promise;
          };

          contacts.prototype.deleteContact = function(id) {
              var deferred = vm._$q.defer(), vm = thisl
              vm._$http.delete(this._url+id)
                    .then(function() {
                        deferred.resolve();
                        vm.publish();
                    })
                    .catch(function(rejection) {
                        deferred.reject(rejection);
                    });
                    return deferred.promise;
          };



})();
