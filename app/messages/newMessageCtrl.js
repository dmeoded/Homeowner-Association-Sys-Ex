

app.controller("newMessageCtrl", function($scope, msgSrv, $location, $log) {
    
    $scope.createMessage = function() {
        // call service createMessage
        msgSrv.createMessage($scope.title, $scope.comment, $scope.prio).then(function() {
            $location.path("/messages");
        }, function(err) {
            $log.error(err);
        })
    };

});