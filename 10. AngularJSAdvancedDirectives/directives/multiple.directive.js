(function() {
   'use strict';

      angular
            .module('directives')
            .directive('attributeThree',attributeThree)
            .directive('attributeFour',attributeFour)
            .directive('attributeFive',attributeFive)
            .directive('attributeSix', attributeSix);

            function attributeThree() {
                return {
                    link: function(scope, element, attrs) {
                        attrs.$addClass('bg-success')
                    }
                };
            }

            function attributeFour() {
              return {
                  link: function(scope, element, attrs) {
                      attrs.$removeClass('bg-primary');
                  }
              }
            }

            function attributeFive() {
              return {
                  link: function(scope, element, attrs) {
                      attrs.$set('style', 'font-weight: bold; font-size: 24px;');
                  }
              }
            }

            function attributeSix() {
              return {
                  link: function(scope, elements, attrs) {
                      attrs.$observe('myWatch', function(value) {
                          elements.find('p')
                                  .text('Model value: '+value);
                      });
                  }
              }
            }


})();
