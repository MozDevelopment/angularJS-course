(function() {
    'use strict';

    angular
      .module('directives')
      .controller('ContentController', ContentController);

      // ContentController

      function ContentController() {
          var vm = this;
          vm.data = {
            showPageOne: true,
            pageNumber: 1,
            pageName: 'detail.page.one.html'
          }
      }//contentController
})();
