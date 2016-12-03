mainApp.controller('RoomController',
  function RoomController($scope, $http, $rootScope) {
    $scope.listGroups = $rootScope.listGroups;
    $scope.save = function(group){
      if( group.name ){
        $scope.group = {id:0,name:''};
        if( !group.id || group.id==0 )$rootScope.listGroups.push({id:$rootScope.listGroups.length+1,name:group.name});
          else {
          for( var i=0;i< $rootScope.listGroups.length;i++){
            if( $rootScope.listGroups[i].id == group.id ){
              $rootScope.listGroups[i].name = group.name;
              break;
            }
          }
        }
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