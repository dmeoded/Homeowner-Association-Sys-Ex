
app.controller("tenantDetailCtrl", function ($scope, $rootScope, userSrv, $routeParams, $location) {

    app.run(function ($rootScope) {
      $rootScope.user = user;
    });
  
    if (!userSrv.isLoggedIn()) {
      $location.path("/");
      return;
    }
  
    $scope.activeUser = userSrv.getActiveUser();
  
    console.log("current user ID from Detail Ctrl:", $routeParams.UsrId);
  
    userSrv.getUsrById($routeParams.usrId).then(function (user) {
      $scope.user = user;
      console.log("current user from Detail Ctrl:", user);
    })
  
    $scope.showUpdUsr = false;
    $scope.updUsr = function () {
      $scope.showUpdUsr = true;
    }
  
    $scope.resetForm = function () {
      $scope.comment = null;
    }
  
  })