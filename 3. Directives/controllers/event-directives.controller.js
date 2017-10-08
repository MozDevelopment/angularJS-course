(function () {
    'use strict';

    angular
      .module('directives')
      .controller('eventDirectives', eventDirectives);

      // eventDirectives

      function eventDirectives() {
          var vm = this;
          vm.messages = [];
          vm.msgNum = 0;

          vm.addMessages = function(msg) {
              vm.messages.unshift({
                  id: vm.msgNum += 1,
                  text: msg
              });
              vm.messages = vm.messages.slice(0, 10);
          };

          vm.onBlur = function(msg) {
              vm.addMessages('onBlur: '+msg);
          };

          vm.onFocus = function(msg) {
              vm.addMessages('onFocus: '+msg);
          };
          vm.onMouse = function(msg) {
              vm.addMessages(msg);
          };
          vm.onKey = function(event) {
              console.warn("OnKey");
              vm.addMessages([
                 event.type,
                 'keyCode: ',
                 event.keyCode,
                 event.shiftKey ? "[Shfit]" : "",
                 event.altKey ? "[Alt]" : "",
                 event.ctrlKey ? "[Ctrl]" : ""
              ].join(' '));
          };

      }//eventDirectives

})();
