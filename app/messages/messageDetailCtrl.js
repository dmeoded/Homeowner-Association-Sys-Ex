app.controller("messageDetailCtrl", function($scope, msgSrv, $routeParams) {
  
  
    msgSrv.getMsgById($routeParams.msgId).then(function(message) {
      $scope.message = message;
      console.log("current message from Ctrl:", message);
    })
    
  })