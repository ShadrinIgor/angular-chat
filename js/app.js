var mainApp = angular.module('mainApp', ["ngRoute", "ngSanitize"])
  .config(function($routeProvider){
    $routeProvider.when('/index',
      {
        templateUrl:'views/index.html',
        controller:'IndexController'
      },
      {
        templateUrl:'views/room.html',
        controller:'RoomController'
      });
    $routeProvider.otherwise({redirectTo: '/index'});
  });
