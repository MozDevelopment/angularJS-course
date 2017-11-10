(function() {
    'use strict';

    angular
      .module('directives')
      .value('messageList', msgLst)
      .controller('CompileController', CompileController);

      var nxtMsgIdx = 0,
      msgLst = [];
      msgLst.add = function(msg) {
        this.push({
            idx: nextMsgIdx += 1,
            msg: msg
          });
        };

      CompileController.$inject = ['messageList'];

      function CompileController(messageList) {
            // vm.messageList = messageList;

            var vm = this;
            vm.text = "Hello world (from controller)";


      }//simpleController

})();
