(function() {
    'use strict';

    angular.module('services')
            .controller('InterpolateController', InterpolateController);

            InterpolateController.$inject = ['$scope','$interpolate'];

            function InterpolateController($scope, $interpolate) {
                $scope.title = '$interpolate';
                $scope.json = {
                    name: 'Lars Lemos',
                    birthYear: 1990,
                    height: 182,
                    home: {
                      city: 'Quelimane',
                      state: 'Zambezia'
                    }
                };
                // $scope.fragment = "My Home City {{home.city || uppercase}}";
                $scope.result = '';
                $scope.interpolate = function() {
                  var fn = $interpolate($scope.fragment);
                  $scope.result = fn($scope.json);
                };

            }//InterpolateController
})();
