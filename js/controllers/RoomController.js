mainApp.controller('RoomController',
  function RoomController($scope, $http, $rootScope, $routeParams) {
    //$scope.listMessage = $rootScope.listMessages;
    $scope.groupName = '';
    $scope.groupId = 0;

    if( $routeParams.roomid > 0 ){
      for( var i=0;i< $rootScope.listGroups.length;i++){
        if( $rootScope.listGroups[i].id == $routeParams.roomid ){
          $scope.groupName = $rootScope.listGroups[i].name;
          $scope.groupId = $rootScope.listGroups[i].id;
          break;
        }
      }
    }

    $scope.save = function(message){
      if( message ){
        $rootScope.listMessages.push( {id: $rootScope.listMessages.length+1, user:$rootScope.user.name, text:message, admin:$rootScope.user.admin, room: parseInt( $routeParams.roomid ) } );
        $scope.message = '';
      }
    };

    $scope.close = function(id){
      if (confirm("Do you want to delete")) {
        for( var i=0;i< $rootScope.listGroups.length;i++){
          if( $rootScope.listGroups[i].id == id ){
            $rootScope.listGroups.splice( i, 1 );
            break;
          }
        }
      }
    }

  }
);