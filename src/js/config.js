(function() {

  'use strict';

  angular
    .module('datesApp.config', [])
    .config(appConfig)
    .run(function($templateCache) {
      $templateCache.removeAll();
    });

  function appConfig() {
    console.log('sanity');
  }

})();
