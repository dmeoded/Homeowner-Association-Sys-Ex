app.controller("issueDetailCtrl", function ($scope, $rootScope, msgSrv, userSrv, $routeParams, $location) {

    app.run(function ($rootScope) {
      $rootScope.message = message;
    });
  
    if (!userSrv.isLoggedIn()) {
      $location.path("/");
      return;
    }
  
    $scope.activeUser = userSrv.getActiveUser();
  
    console.log("current issue ID from Detail Ctrl:", $routeParams.msgId);
  
    msgSrv.getIssueById($routeParams.msgId).then(function (issue) {
      $scope.message = issue;
      console.log("current issue from Detail Ctrl:", issue);
    })
  
    $scope.showUpdMsg = false;
    $scope.updMsg = function () {
      $scope.showUpdMsg = true;
    }
  
    $scope.resetForm = function () {
      $scope.comment = null;
    }
  
  })