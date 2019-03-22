app.controller("messageDetailCtrl", function ($scope, $rootScope, msgSrv, userSrv, $routeParams, $location) {

  app.run(function ($rootScope) {
    $rootScope.message = message;
  });

  if (!userSrv.isLoggedIn()) {
    $location.path("/");
    return;
  }

  $scope.activeUser = userSrv.getActiveUser();

  msgSrv.getMsgById($routeParams.msgId).then(function (message) {
    $scope.message = message;
    console.log("current message from Detail Ctrl:", message);
  })

  $scope.showUpdMsg = false;
  $scope.updMsg = function () {
    $scope.showUpdMsg = true;
  }

  $scope.resetForm = function () {
    $scope.comment = null;
  }

})