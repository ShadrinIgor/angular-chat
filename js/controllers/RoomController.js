mainApp.controller('RoomController',
  function RoomController($scope, $http, $rootScope, $routeParams) {
    $scope.listMessage = $rootScope.listMessages;
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
        $scope.listMessage.push( {user:'user 1', text:message, admin:false, room:$routeParams.roomid } );
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