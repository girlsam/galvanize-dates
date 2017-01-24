// sample angular code

(function() {

  'use strict';

  angular
    .module('datesApp', [
      'datesApp.config',
      'ngRoute',
      'datesApp.components.main',
      'datesApp.components.member'
    ]);

})();
