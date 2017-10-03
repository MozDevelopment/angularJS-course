(function() {
  'use strict';

  angular
    .module('services')
    .config(autoScrollingDisable)
    .controller('AnchorScrollController', AnchorScrollController);

    AnchorScrollController.$inject = ['$scope','$anchorScroll','$location'];

    function AnchorScrollController($scope, $anchorScroll, $location) {
        $scope.title = '$anchorScroll';
        var count, list = [];
        for(count =0; count<100; count++) {
            list.push(count);
        }

        $scope.list = list;
        $scope.set = 0;
        $scope.doScroll = false;
        $scope.goTo = function() {
            $location.hash($scope.set);
            if($scope.doScroll){
                $anchorScroll();
            }
        }
        $scope.top = function() {
            $location.hash('top');
            if($scope.doScroll){
                $anchorScroll();
            }
        }


    }//AnchorScrollController

    autoScrollingDisable.$inject = ['$anchorScrollProvider'];

    function autoScrollingDisable($anchorScrollProvider) {
        $anchorScrollProvider.disableAutoScrolling();
    }//autoScrollingDisable


})();
