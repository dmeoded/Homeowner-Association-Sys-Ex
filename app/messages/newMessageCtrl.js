
app.controller("newMessageCtrl", function ($scope, $rootScope, msgSrv, $location, $log) {

    $scope.createMessage = function () {
        $scope.msgType = "Message";
        msgSrv.createMessage
        ($scope.title, $scope.msgType,  $scope.desc, $scope.prio, $scope.file).then(function () {
            $location.path("/messages");
            $scope.showNewMsg = false;
        }, function (err) {
            $log.error(err);
        })
    };

    $scope.invalideMsg = function () {
       return $scope.title? false: true;
    };

    $scope.prio = "2-Info";

    $scope.resetForm = function () {
        $scope.title = null;
        $scope.desc = null;
        $scope.prio = null;
        $scope.file = null;
    }

});