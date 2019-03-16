
    app.controller("messageCtrl", function($scope, $http, $location, $log, msgSrv, userSrv ) {
    
  
    // Loading the messages
    $scope.messages = [];
    msgSrv.getMsgs().then(function(messages) {
      $scope.messages = messages;
    }, function(err){
      $log.error(err);
    })
    
  
    // Filtering the messges by title and comment (presentation logic)
    $scope.filterMsg = function(message) {
      if (!$scope.filterBy) {
        return true;
      } else if (message.title.toLowerCase().includes($scope.filterBy.toLowerCase()) || 
          message.comment.toLowerCase().includes($scope.filterBy.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    }
    
    // Order logic (presentation logic)
    $scope.orderProp = "";
    $scope.reverseOrder = false;
    $scope.orderByProp = function(propName) {
      
      if ($scope.orderProp === propName) {
        // Clicking header for the first time
        $scope.reverseOrder = !$scope.reverseOrder;
      } else {
        // Clicking header for the first time
        $scope.orderProp = propName;
        $scope.reverseOrder = false;
      }
    }
    
    // Selected Message (presentation logic)
    $scope.selectedMsg = null;
    $scope.selectMsg = function(message) {
      if ($scope.selectedMsg === message) {
        $scope.selectedMsg = null;
      } else {
        $scope.selectedMsg = message;
      }
    //   $log.info("The selected message is: " + $scope.selectedMsg.title);
    }
    
    $scope.addMsg = function() {
    //   msgsrv.addMsg("Subaru", "B4");
    }
    
    $scope.openMsg = function(message) {
      $location.path("messages/" + $scope.messages.indexOf(message));
    }
  

})