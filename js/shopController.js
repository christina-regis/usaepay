angular.module('usaepay')
  .controller('ShopController', ShopController);

ShopController.$inject = ['$http', '$stateParams', '$location'];

function ShopController($http, $stateParams, $location) {
  var self = this;
  self.hello = "hello";
}
