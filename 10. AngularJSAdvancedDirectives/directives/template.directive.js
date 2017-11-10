(function() {
    'use strict';

    angular
      .module('directives')
      .directive('templateDirective', templateDirective)

       function templateDirective() {
         return {
            restrict: 'A',
            templateUrl: 'hello-world.html'
         }
       };

})();
