(function() {
    'use strict';

    angular
      .module('directives')
      .controller('SimpleController', SimpleController);


      function SimpleController() {
            var vm = this;
            vm.text = "Hello world (from controller)";
      }//simpleController

})();
