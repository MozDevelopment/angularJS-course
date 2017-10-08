(function() {
    'use strict';

    angular
      .module('directives')
      .controller('formEventController', formEventController);

      // formEventController

      function formEventController() {
          var vm = this;
          vm.user = {
            emailAddress: 'some-address@gmail.com',
            message: ''
          };
      }//formEventController

      formEventController.prototype.cancelChanges = function() {
          this.user.message = "You selected the cancel button.";
      };

      formEventController.prototype.saveChanges = function() {
          this.user.message = "You selected the save button.";
      };

      formEventController.prototype.cleanField = function() {
          this.user.emailAddress = '';
      }

})();
