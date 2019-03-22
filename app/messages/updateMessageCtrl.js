app.controller("updateMessageCtrl", function ($scope, $rootScope, msgSrv, userSrv, $routeParams, $location, $log) {

    $scope.updateMessage = function () {
        $scope.message.comment =
            (!$scope.message.comment ? " " : $scope.message.comment + "<BR>") + userSrv.getActiveUser().fullName 
            + " created at " + (new Date().getTime("YYYY-MM-DD HH:MM:SS")) + ": " + $scope.ncomment;

            // dateFormat(today, "YYYY-MM-DD HH:MM:SS");
        // msgSrv.updateMessage = function ($scope.message.id,  $scope.ncomment) {
        // }
        console.log("current message ID from Ctrl after Update: ", $scope.message.id);
        console.log("current message from Ctrl after Update: ", $scope.message);
        console.log("current message Comm from Ctrl after Update: ", $scope.message.comment);
        $scope.showUpdMsg = false;
        $scope.ncomment = null;
    };

    $scope.resetForm = function () {
        $scope.ncomment = null;
    }

})