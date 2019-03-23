app.controller("messageDetailCtrl", function ($scope, $rootScope, msgSrv, userSrv, $routeParams, $location) {

  app.run(function ($rootScope) {
    $rootScope.message = message;
  });

  if (!userSrv.isLoggedIn()) {
    $location.path("/");
    return;
  }

  $scope.activeUser = userSrv.getActiveUser();

  console.log("current message ID from Detail Ctrl:", $routeParams.msgId);

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