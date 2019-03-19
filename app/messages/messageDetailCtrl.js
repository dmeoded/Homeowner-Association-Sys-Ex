app.controller("messageDetailCtrl", function ($scope, msgSrv, userSrv, $routeParams, $location) {

  if (!userSrv.isLoggedIn()) {
    $location.path("/");
    return;
  }

  $scope.activeUser = userSrv.getActiveUser();

  msgSrv.getMsgById($routeParams.msgId).then(function (message) {
    $scope.message = message;
    console.log("current message from Ctrl:", message);
  })

  $scope.showUpdMsg = false;
  $scope.updMsg = function () {
      $scope.showUpdMsg = true;
  }

  $scope.resetForm = function () {
    $scope.comment = null;
  }

})