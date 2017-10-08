(function() {
    'use strict';

    angular
      .module('directives')
      .controller('bindingDirectiveController', bindingDirectiveController);

      bindingDirectiveController.$inject = ['$sce'];

      function bindingDirectiveController($sce) {
          var vm = this;
          vm.stringsData = {
            textValue: 'My Text Value'
            };
          vm.stringsData = {
            textValue: 'My Text Value',
            htmlValue: '<p>This is a <strong> paragraph </strong> with <em> elements </em> </p>',
            unsafeHtmlValue: '<p style="font-size: 48pt; cursor: pointer;" onclick="alert("You Clicked")"> <p>This is a <strong> paragraph </strong> with<em> elements </em> </p>',
            safeHtmlValue: $sce.trustAsHtml('<p style="font-size: 48pt; cursor: pointer;" onclick="alert("You Clicked")"> <p>This is a <strong> paragraph </strong> with<em> elements </em> </p>')
            };
          vm.height2 = null;
      }//formSelectController

})();
