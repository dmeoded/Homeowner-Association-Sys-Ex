

app.controller("newMessageCtrl", function ($scope, msgSrv, $location, $log) {

    $scope.createMessage = function () {
        // call service createMessage
        msgSrv.createMessage($scope.title, $scope.comment, $scope.prio).then(function () {
            $location.path("/messages");
            $scope.showNewMsg = false;
        }, function (err) {
            $log.error(err);
        })
    };

    $scope.resetForm = function (form) {
        $scope.title = null;
        $scope.comment = null;
        $scope.prio = null;
    }

});