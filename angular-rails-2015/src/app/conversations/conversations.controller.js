(function() {
  'use strict';

  angular
    .module('angularRails')
    .controller('ConversationsController', function($rootScope, $scope, $state, $stateParams, $auth, Conversation) {

      // method to query the posts api and store the results in $scope
      // note: the linter will complain, but that can be fixed later:
      // You should not set properties on $scope in controllers. Use controllerAs syntax and add data to "this"
      var conversation_query = function(){
        Conversation.query().then(function(conversations){
          $scope.conversations = conversations;
        });
      }

      // when the user logs in, fetch the posts
      $rootScope.$on('auth:login-success', function(ev, user) {
        conversation_query();
      });

      // when the user logs out, remove the posts
      $rootScope.$on('auth:logout-success', function(ev) {
        $scope.conversations = null;
      });

      // will get a "401 Unauthorized" if the user is not authenticated
      conversation_query();

    });

})();