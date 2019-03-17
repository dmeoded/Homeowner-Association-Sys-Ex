

app.controller("newMessageCtrl", function ($scope, msgSrv, $location, $log) {

    $scope.createMessage = function () {
        // call service createMessage
        msgSrv.createMessage($scope.title, $scope.desc, $scope.prio, $scope.file).then(function () {
            $location.path("/messages");
            $scope.showNewMsg = false;
        }, function (err) {
            $log.error(err);
        })
    };

    $scope.resetForm = function () {
        $scope.title = null;
        $scope.desc = null;
        $scope.prio = null;
        $scope.file = null;
    }

});