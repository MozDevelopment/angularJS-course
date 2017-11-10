(function() {
    'use strict';

    angular
      .module('directives')
      .directive('helloDirective', helloDirective)
      .directive('helloDirectiveTwo', helloDirectiveTwo);

      function helloDirective() {
          return {
              template: '<p>Helo World One </p>'
          }
      };

      function helloDirectiveTwo() {
          return {
              restrict: 'ACME',
              template: '<p>Helo World Two </p>',
              replace: true
          }
      };

})();
