(function() {
    'use strict';

      angular
        .module('performance')
        .factory('$exceptionHandler', exceptionHandler);

        function exceptionHandler($injector) {
            var rs = null;
            return function(exception, cause) {
                if(rs === null) {
                    rs = $injector.get('$rootScope');
                }
                exception.message = rs.errorList.length +': '+exception.message;
                rs.errorList.push(exception.message);
                console.info(rs);
                throw exception;
            };
        }//exceptionHandler

        exceptionHandler.$inject = ['$injector'];
})();
