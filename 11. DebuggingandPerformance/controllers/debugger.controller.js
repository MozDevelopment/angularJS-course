(function() {
    'use strict';

    angular
          .module('performance')
          .controller('controller', controller);

          controller.$inject = ['$log'];

          function controller($log) {
              $log.log('controller created');
              this.$log = $log;
          }

          controller.prototype.warn = function() {
              this.$log.warn('Warning genereated. ');
          };

          controller.prototype.error = function() {
              this.$log.error('Error generated');
              throw new Error('My custom error');
          };

          controller.prototype.debugger = function() {
              debugger;
              console.log('Here we are..');
          };

})();
