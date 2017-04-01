(function() {
  'use strict';

  angular
    .module('angularRails')
    .config(routerConfig)
    .factory('Conversation', ['railsResourceFactory', function(railsResourceFactory) {
      return railsResourceFactory({
        url: '/api/v1/conversations',
        name: 'conversation'
      });
    }]);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('conversations', {
        url: '/conversations',
        templateUrl: 'app/conversations/conversations.html',
        controller: 'ConversationsController',
        controllerAs: 'conversations'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
