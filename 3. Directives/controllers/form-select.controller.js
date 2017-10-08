(function() {
    'use strict';

    angular
      .module('directives')
      .controller('formSelectController', formSelectController);

      // formEventController

      function formSelectController() {
          var vm = this;
          vm.stringsData = {
            allValues: [
                "One", "Two", "Three", "Four", "Five"
            ],
            selectedValue: "Two"
            };
            vm.objData = {
              allValues: [
                {
                  id: 1,
                  name: "One",
                  type: "Red"
                },
                {
                  id: 2,
                  name: "Two",
                  type: "Green"
                },
                {
                  id: 3,
                  name: "Three",
                  type: "Red"
                },
                {
                  id: 4,
                  name: "Four",
                  type: "Red"
                },
                {
                  id: 5,
                  name: "Five",
                  type: "Green"
                }
              ],
              selectedValue: undefined,

                allObjects: {
                 alpha : {
                    id: 1,
                    name: "One",
                    type: "Red"
                  },
                  beta: {
                    id: 2,
                    name: "Two",
                    type: "Green"
                  },
                  gama: {
                    id: 3,
                    name: "Three",
                    type: "Red"
                  },
                  delta: {
                    id: 4,
                    name: "Four",
                    type: "Red"
                  },
                  epsilon: {
                    id: 5,
                    name: "Five",
                    type: "Green"
                  }
                }
            };

      }//formSelectController

})();
