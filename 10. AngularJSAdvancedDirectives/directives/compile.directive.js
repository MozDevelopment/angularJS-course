(function() {
    'use strict';

    angular
      .module('directives')
      .directive('compileDirective', compileDirective)
      .directive('compileList', compileList)
      .directive('appendDirective', appendDirective)
      .directive('stylesDirective', stylesDirective)
      .directive('appendTemplate', appendTemplate)
      .directive('linkDirective', linkDirective)
      .directive('markupDirective', markupDirective)
      .directive('replaceDirective', replaceDirective);

      function compileDirective() {
        return {
            compile: function(elements, attrs) {
              angular.element("<p> Simple Compile/Link Directive </p>")
                .appendTo(elements);
                  return {
                    pre: function(scope, iElement, iAttrs) {},
                    post: function(scope, iElement, iAttrs) {}
                  }
            }
        };
      }

      function compileList() {
          return {
              compile: function(elements, attrs) {
                  messageList.add('[Compile Function]');
                  angular
                    .element("<p> Simple Compile/Link Directive</p>")
                    .appendTo(elements);
                    return {
                      pre: function(scope, element, attrs) {
                          messageList.add('[Pre-Link Function]');
                      },
                      post: function(scope, element, attrs) {
                          messageList.add('[Post-Link Function]');
                      }
                    }
              }
          };
      }

      function appendDirective() {
        return {
          compile: function(elements, attrs) {
            angular.element('<p> Appended Element</p>')
                    .appendTo(elements);
          }

        };
      }

      function stylesDirective() {
        return {
            compile: function(elements, attrs) {
                elements.find('button')
                        .attr('disabled', 'disabled');
                elements.find('p')
                        .toggleClass('bg-primary');

          }
        };
      }

      function appendTemplate() {
        return {
            template: "<ul><li>One</li><li>Two</li><li>Three</li></ul>",
            compile: function(elements, attrs) {
                elements.find("ul").append("<li>Four</li>");
            }
          };
      }

      function linkDirective() {
        return {
            link: function(scope, elements, attrs) {
                elements.find('button')
                        .attr('disabled', 'disabled');
                elements.find('p')
                        .toggleClass('bg-primary');
            }
        };
    }

      function markupDirective() {
        return {
          compile: function(elements, attrs) {
               elements.append("<p> Some  Template Text </p>");
               angular.element("<button>")
                      .addClass("btn")
                      .text("Click Me Again")
                      .appendTo(elements)
                return function(scope, element, attrs) {
                      element.find('button')
                      .on('click', function(evt) {
                          element.find('p')
                                  .toggleClass('bg-primary');
                      });
                }
          }
        };
      }

      function replaceDirective() {
          return {
               compile: function(elements, attrs) {
                  var html = '<ol><li>One</li> <li>Two</li> <li>Three</li></ol>';
                  elements.replaceWith(html);
               }
          };
      }

})();
