(function() {
    'use strict';

    angular
      .module('directives')
      .controller('formDirectiveController', formDirectiveController);

      // formDirectiveController

      function formDirectiveController() {
          var vm = this;

          vm.user = {
            emailAddress: 'some-address@gmail.compute',
            message: ''
          };

      }//formDirectiveController
})();
