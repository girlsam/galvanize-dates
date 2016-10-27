(function() {

  'use strict';

  angular
    .module('datesApp.config', ['ui.router'])
    .config(appConfig)
    .run(function($templateCache) {
      $templateCache.removeAll();
    });

  function appConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')
    $stateProvider
    .state('/', {
      url: '/',
      template: 'js/components/main/main.view.html'
    });
  }

})();
