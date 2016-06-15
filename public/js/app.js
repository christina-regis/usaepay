angular.module('usaepay', ['ui.router'])
  .config(configuration);

configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

function configuration($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('form', {
      url:'/form',
      templateUrl: 'partials/form.html',
      controller: 'FormController as formctrl'
    })
    .state('shop', {
      url:'/shop',
      templateUrl: 'partials/shop.html',
      controller: 'ShopController as shopctrl'
    })
    .state('approved',{
      url:'/approved',
      templateUrl: 'partials/approved.html',
      controller: 'ApprovedController as approvectrl'
    })
    .state('declined', {
      url:'/declined',
      templateUrl: 'partials/declined.html',
      controller: 'DeclinedController as declinectrl'
    });
  }
