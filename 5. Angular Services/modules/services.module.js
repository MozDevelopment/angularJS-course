(function() {
    'use strict';

    var app = angular.module('services', [])


    app.config(serviceDelegate);

    serviceDelegate.$inject = ['$sceDelegateProvider'];

    function serviceDelegate($sceDelegateProvider) {
      $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://*.wintellect.com/*'
      ]);
      // $sceDelegateProvider.resourceUrlBlacklist([
      //   'http://localhost**'
      // ]);
    }//serviceDelegate

    app.run(hearderUrl);

    hearderUrl.$inject = ['$rootScope'];

    function hearderUrl($rootScope) {
      $rootScope.headerUrl = '/templates/header.html';
    }//headerUrl

})();
