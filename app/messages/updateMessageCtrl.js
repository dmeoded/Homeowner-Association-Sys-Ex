app.controller("updateMessageCtrl", function ($scope, $rootScope, msgSrv, $routeParams, $location, $log) {


    // $scope.updateMessage = function () {

    //     msgSrv.updateMessage($scope.id, $scope.ncomment).then(function (message) {
    //         console.log("current message ID from Ctrl after Update: ", $scope.message.id);
    //         console.log("current message Comm from Ctrl after Update: ", $scope.message.comment + " " + $scope.ncomment);    //     }, function (err) {
    //         $scope.showUpdMsg = false;
    //         $scope.message = message;

    //     }, function () {
    //         $log.error(err);
    //         $scope.showUpdMsg = true;
    //     });

    // }

    $scope.updateMessage = function () {
        $scope.message.comment = $scope.message.comment + " " + $scope.ncomment;
        // updateMessage = function () {
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