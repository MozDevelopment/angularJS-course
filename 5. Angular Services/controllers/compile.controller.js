(function() {
    'use strict';

    angular
      .module('services')
      .controller('CompileController', CompileController);

      CompileController.$inject = ['$scope','$compile','htmlFragment'];

      function CompileController($scope, $compile, htmlFragment) {
          $scope.title = '$compile';
          var vm = this;
          vm.$scope = $scope;

          $scope.value = {
            text: 'Not Set',
            input: ''
          };

          $scope.compiled = false;
          $scope.compile = function() {
              var element = angular.element(htmlFragment),
              scope = $scope.$new()
              vm.scope = scope;
              $compile(element.contents())(scope);
              $scope.compiled = true;
          };

          $scope.update = function() {
              $scope.value.text = $scope.value.input;
              $scope.value.input = '';
          };

      }//compileController

})();
