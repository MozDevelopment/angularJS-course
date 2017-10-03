(function() {
    'use strict';

    angular
      .module('services')
      .factory('htmlFragment', htmlFragment);

      // htmlFragment.$inject = [''];

      function htmlFragment() {
          return window.document.getElementById('notCompiled');
      }//htmlFragment

})();
