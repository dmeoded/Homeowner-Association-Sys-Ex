

app.controller("newMessageCtrl", function ($scope, $rootScope, msgSrv, $location, $log) {

    $scope.createMessage = function () {
        msgSrv.createMessage
        ($scope.title, $scope.msgType,  $scope.desc, $scope.prio, $scope.msgType, $scope.file).then(function () {
            $location.path("/messages");
            $scope.showNewMsg = false;
        }, function (err) {
            $log.error(err);
        })
    };

    $scope.invalideMsg = false;
    $scope.invalideMsg = function () {
       return $scope.title? true: false;
    };


    $scope.resetForm = function () {
        $scope.title = null;
        $scope.desc = null;
        $scope.prio = null;
        $scope.file = null;
    }

});