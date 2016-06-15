angular.module('usaepay')
  .controller('FormController', FormController);

FormController.$inject = ['$http', '$stateParams', '$location'];

function FormController($http, $stateParams, $location) {
  var self = this;
  self.submit = submit;

  function submit(){
    console.log("clicked");
    $http
      .post('https://sandbox.usaepay.com/gate.php/_pWEqrQiNqur5CkKoMG475sGoYf81ERN')
      .then(function(response){
        console.log(response);
        //redirect
      });
  }
}
