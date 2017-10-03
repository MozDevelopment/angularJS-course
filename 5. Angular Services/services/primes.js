(function() {
    'use strict';

    angular
      .module('services')
      .factory('primes', primes);

      primes.$inject = ['$q','$timeout'];

      function primes($q, $timeout) {
          var primeService = {
              computePrimes: function(max) {
                var defer = $q.defer();
                  var sieve = [];
                  var i =2;
                  var primes = [],
                  block = function(s, i1, p) {
                      var count = 10, j;
                      while(count >= 0 && i1 <=max) {
                        if(!s[i1]) {
                            p.push(i1);
                            for(j = i1*2; j<= max; j += i1) {
                                s[j] = true;
                            }
                        }
                        i1 += 1;
                        count -= 1;
                      }
                      defer.notify(i1);
                      if(i1 >= max) {
                          defer.resolve(p);
                      } else {
                        (function(s1, i2, p1) {
                            $timeout(function() {
                                block(s1, i2, p1);
                            }, 10);
                        })(s, i1, p);
                      }
                    };
              block(sieve, i, primes);
              return defer.promise;
            }
          };
          return primeService;
      }//primes

})();
