(function() {
    'use strict';

    angular
          .module('webservices')
          .controller('controller', controller);

          controller.$inject = ['$log'];

          function controller($log) {

             var url =  'http://localhost:4000/home/jsonp',
                  script = document.createElement('script');

              window.parseJson = function (response) {
                  console.log(response);
              };

              script.setAttribute('src', url);
              document.getElementsByTagName('head')[0].appendChild(script);



          }//controller


})();
