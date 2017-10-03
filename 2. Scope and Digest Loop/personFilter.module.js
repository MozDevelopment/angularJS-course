(function() {
    'use strict';

    var app = angular.module('filterPerson', []);

    app.value('maxPeople', 4);

    app.controller('FilterController', FilterController);

    FilterController.$inject = ['$scope', 'maxPeople'];

    function FilterController($scope, maxPeople) {
        var applyFilter = function(people, filter) {
          if(filter.length < 3) {
              return people.slice(0)
          }
          var filteredPeople = [];
          console.info("Filter: "+filter);
          for(var idx = 0; idx < people.length; idx++) {
            console.info("People: "+people[idx].name);
            if(people[idx].name.indexOf(filter) >= 0) {
                filteredPeople.push(people[idx]);
            }
          }
          return filteredPeople;
        };
        var id = 1;

        $scope.name = '';
        $scope.filter = '';
        $scope.canAdd = false;
        $scope.people = [];
        $scope.filteredPeople = [];

        $scope.add = function() {
          $scope.people.push({
              id: id,
              name: $scope.name
          });
          id++;
          $scope.filteredPeople = applyFilter($scope.people, $scope.filter);
        }

        $scope.$watch("name", function(name) {
            $scope.canAdd = name.length > 3 && $scope.people.length < maxPeople;
        });

        $scope.$watchCollection("people", function(newPeople, oldPeople) {
            if(newPeople.length === maxPeople) {
              $scope.canAdd = false;
            }
        });

        $scope.$watch(function() {
          console.info("WATCH");
          return $scope.filter.length;
        }, function() {
          console.info("Apply Filter")
            $scope.filteredPeople = applyFilter($scope.people, $scope.filter);
        });

    }//filterController

})();
