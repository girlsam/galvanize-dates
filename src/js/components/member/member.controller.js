(function() {

  'use strict';

  angular
    .module('datesApp.components.member')
    .controller('memberController', memberController);

  memberController.$inject = ['memberService'];

  function memberController(memberService) {
    /* jshint validthis: true*/
    memberService.getAllMembers()
    .then((members) => {
      let dataArr = members.data.data;
      dataArr.map((i) => {
        console.log(i);
      })
    });
  }

})();

//helper functions
