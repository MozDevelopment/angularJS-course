(function() {
    'use strict';

    angular
      .module('services')
      .factory('$exceptionHandler', exceptionHandler);

      exceptionHandler.$inject = ['$injector'];

      function exceptionHandler($injector) {
            var errors = 0;
            return function(exception, cause) {
                errors += 1;
                exception.message += '(cause by " '+cause+' " ';
                if($injector.has('$rootScope')) {
                    var rootScope = $injector.get('$rootScope');
                    rootScope.errors = rootScope.errors || [];
                    rootScope.errors.push("Error #"+errors+ ":"+exception.toString());
                } else {
                    throw exception;
                }
            }

      }//exceptionHandler
})();
