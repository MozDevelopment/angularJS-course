(function() {
    'use strict';

    angular
      .module('services')
      .controller('IntervalController', IntervalController);

      IntervalController.$inject = ['$scope', '$interval', '$log', 'maxRows','maxColumns'];

      function IntervalController($scope, $interval, $log, maxRows, maxColumns) {

            $scope.title = '$interval' ;
            var vm = this;


            vm.$scope = $scope;
            vm.maxRows = maxRows;
            vm.maxColumns = maxColumns;
            vm.bias = 0.5;
            vm.pos = (maxColumns /2 );
            vm.lines = [];

            vm.iterate = function() {
              var idx, nextPos, prevPos, newLine = [];
              for(idx = 0; idx < vm.maxColumns; idx ++)  {
                  newLine[idx] = {idx: idx, val: '#' };
              }
              newLine[vm.pos].val = '0';

              if(Math.Random < vm.bias) {
                nextPos = vm.pos +1
                if(nextPos < vm.maxColumns) {
                    vm.pos = nextPos;
                } else {
                  vm.bias -= 0.1;
                  $log.info('Hit right wall.');
                }
              }
              else {
                  prevPos = vm.pos - 1;
                  if(prevPos >= 0 ) {
                      vm.pos = prevPos;
                  } else {
                    vm.bias += 0.1;
                    $log.info('Hit left wall');
                  }
              }
              vm.lines.push(newLine);
              if(vm.lines.length > vm.maxRows) {
                vm.lines.splice(0,1);
              }
            };

            //
            $scope.cancel = function() {
                $interval.cancel(vm.$scope.promise);
                vm.$scope.promise = undefined;
                $log.warn('Interval has been stopped. You must refresh the page to restart');
            };

            $scope.promise = $interval(vm.iterate, 90);

            console.info(vm);
      }//intervalController

})();
