mainApp.controller('IndexController',
  function IndexController($scope, $http, $rootScope, $cookies) {
    $rootScope.loginError = '';
    $scope.login = function ( form ) {
      if( form.name ){
        if( form.admin ){

          $rootScope.admins.map( function( value ) {
            if( form.name == value.name && form.password == value.password ) {
              $rootScope.user = {name:value.name, auth:true, admin:true};
            }
          });
          if( !$rootScope.user.name )$rootScope.loginError = 'Incorrect login or password';

        }
          else {
          $rootScope.user = {name:form.name, auth:true, admin:false};
        }

        if( $rootScope.user.name ) {
          $cookies.put('user', form.name);
          $cookies.put('admin', $rootScope.user.admin );
        }
      }
        else $rootScope.loginError = 'You must fill in field';
    };

    $scope.logout = function() {
      $cookies.put('user', '');
      $cookies.put('admin', false );
    }

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

    $scope.edit = function(id){
      for( var i=0;i< $rootScope.listGroups.length;i++){
        if( $rootScope.listGroups[i].id == id ){
          $scope.group = {id:$rootScope.listGroups[i].id,name:$rootScope.listGroups[i].name};
          break;
        }
      }
    };

    $scope.delete = function(id){
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