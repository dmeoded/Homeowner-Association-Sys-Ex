app.controller("updateMessageCtrl", function ($scope, $rootScope, msgSrv, $routeParams, $location, $log) {

    $scope.updateMessage = function () {
        $scope.message.comment = $scope.message.comment + " " + $scope.ncomment;
        // msgSrv.updateMessage = function ($scope.message.id,  $scope.ncomment) {
        // }
        console.log("current message ID from Ctrl after Update: ", $scope.message.id);
        console.log("current message Comm from Ctrl after Update: ", $scope.message.comment + " " + $scope.ncomment);
        $scope.showUpdMsg = false;
        $scope.ncomment = null;
    };

    $scope.resetForm = function () {
        $scope.ncomment = null;
    }

})