app.controller("updateMessageCtrl", function ($scope, $rootScope, msgSrv, $routeParams, $location, $log) {


    // $scope.updateMessage = function () {
    //     // msgSrv.updateMessage($scope.id, $scope.ncomment).then(function () {
    //     msgSrv.updateMessage().then(function () {

    //         $location.path("/messages");
    //         $scope.showUpdMsg = false;
    //         // $scope.message = message;
    //         console.log("current message from Ctrl after Update:");
    //     }, function (err) {
    //         $log.error(err);
    //     })
    // };

    $scope.updateMessage = function () {
        $scope.comment = $rootScope.comment + $scope.ncomment;
        console.log("current message from Ctrl after Update: ", $rootScope.comment + $scope.ncomment);
        $scope.showUpdMsg = false;
    };


    $scope.resetForm = function () {
        $scope.ncomment = null;
    }

});