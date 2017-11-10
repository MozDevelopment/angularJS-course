(function() {
    'use strict';

    angular.module('filters')
          .controller('FilterController', FilterController);

          FilterController.$inject = ['$filter'];

          function FilterController($filter) {
              var vm = this;
              vm.title = 'Testing the Uppercase Filter';
              vm.limit = vm.title.indexOf(' ');
              vm.uppercaseTitle = $filter('limitTo')($filter('uppercase')(vm.title), vm.limit);
        }
 })();
