describe('my $scope', function() {
    beforeEach(module('myScope'));

    it('evaluates expression', inject(function($rootScope){
      var scope = $rootScope.$new();
      scope.a = 1;
      scope.b = 2;

      expect(scope.$eval('a+b')).toBe(3);
    }));

    it('inherits from parent', inject(function($rootScope) {
      var scope = $rootScope.$new();
      var childScope = scope.$new();

      scope.a = 1;
      scope.b = 2;

      expect(childScope.$eval('a+b')).toBe(3);
    }));

    it('overrides from parent', inject(function($rootScope) {
      var scope = $rootScope.$new();
      var childScope = scope.$new();
      scope.a = 1;
      scope.b = 2;
      childScope.b = 3;
      expect(scope.$eval('a+b')).toBe(3);
      expect(childScope.$eval('a+b')).toBe(4);

    }));

});
