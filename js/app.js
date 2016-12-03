var mainApp = angular.module('mainApp', ["ngRoute", "ngSanitize", "ngCookies"])
  .config(function($routeProvider){
    $routeProvider.when('/index', {
        templateUrl:'views/index.html',
        controller:'IndexController'
      })
      .when('/room/:roomid', {
        templateUrl:'views/room.html',
        controller:'RoomController'
      });
    $routeProvider.otherwise({redirectTo: '/index'});
  })
  .run( function( $rootScope, $cookies ){
    $rootScope.listGroups = [];
    $rootScope.listMessages = [];

    var userCookie = $cookies.get('user');
    if( !userCookie ){
      $rootScope.user = {name: '', auth: false, admin:false};
    } else {
      var adminCookie = $cookies.get('user');
      $rootScope.user = {name: userCookie, auth: true, admin:adminCookie};
    }

    $rootScope.admins = [
      {name:'admin', password:'123'}
    ];
  } );
