angular.module('usaepay')
  .controller('ApprovedController', ApprovedController);

ApprovedController.$inject = ['$http', '$stateParams', '$location'];

function ApprovedController($http, $stateParams, $location) {
  var self = this;
  var stuff = window.location.pathname;


}
