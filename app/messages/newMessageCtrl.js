
app.controller("newMessageCtrl", function ($scope, $rootScope, msgSrv, $location, $log) {

    $scope.prio = "2-Info";
    $scope.msgType = "Message";
    $scope.invalideMsg = false;

    $scope.createMessage = function () {

        if (!$scope.title) {
            $scope.invalideMsg = true;

        } else {
            $scope.invalideMsg = false;
            msgSrv.createMessage
                ($scope.title, $scope.msgType, $scope.desc, $scope.prio, $scope.file).then(function () {
                    $location.path("/messages");
                    $scope.showNewMsg = false;
                }, function (err) {
                    $log.error(err);
                });
        }
    };


    // $scope.invalideMsg = function () {
    //    return $scope.title? false: true;
    // };

    $scope.resetForm = function () {
        $scope.title = null;
        $scope.desc = null;
        $scope.prio = null;
        $scope.file = null;
    }

});