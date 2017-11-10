(function() {
    'use strict';

    angular.module('directives')
            .directive('modelExample', modelExample);

            function modelExample() {
                return {
                  restrict: 'A',
                  require: '?ngModel',
                  link: function(scope, element, attrs, ngModel) {
                          var dateValue;
                            if(!ngModel) {
                              return ; //If no ng-model, then do nothing
                            }
                            ngModel.$formatters.push(function(value) {
                                if(value) {
                                  dateValue = Date.create(value);
                                  if(dateValue.isValid()) {
                                      return dateValue.full();
                                  }
                                }
                                return "Date is not available";
                            });
                            ngModel.$parses.push(function(value) {
                                dateValue = Date.create(value);
                                if(dateValue.isValid()) {
                                    return dateValue;
                                } else {
                                    return null;
                                }
                            });
                  }
                }
            }
})();
