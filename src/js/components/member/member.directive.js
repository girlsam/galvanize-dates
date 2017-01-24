(function() {

  'use strict';

  angular.module('datesApp.components.member')
    .directive('cdMember', memberDirective);

  memberDirective.$inject = [];

  function memberDirective() {
    return {
      scope: {},
      restrict: 'E',
      controller: 'memberController',
      controllerAs: 'vm',
      templateUrl: './js/components/member/member.view.html'
    };
  }

}());
