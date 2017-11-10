(function() {
    'use strict';

    angular.module('directives')
          .controller('AttributeController', AttributeController);

          AttributeController.$inject = ['$timeout'];

          function AttributeController($timeout) {
              var vm = this, counter = 10;
              vm.modelValue = 10000;
              $timeout(changeValue, 1000);

              function changeValue() {
                  vm.modelValue += 10;
                  if((counter -= 1) > 0) {
                      $timeout(changeValue, 1000);
                  }
              };

              //Date Value Example
              vm.dateValue = new Date();
              vm.resetDate = function() {
                vm.dateValue = new Date();
              }

          }

})();
