(function () {

  'use strict';

  angular.module('datesApp.components.member')
    .service('memberService', memberService);

  memberService.$inject = ['$http'];

  function memberService ($http) {
    /* jshint validthis: true*/
    const baseURL = 'http://galvanize-student-apis.herokuapp.com/gdating/members';
    this.getAllMembers = function() {
      return $http.get(baseURL);
    };
  }

})();
