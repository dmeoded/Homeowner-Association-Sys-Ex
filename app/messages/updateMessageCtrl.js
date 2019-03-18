app.controller("updateMessageCtrl", function ($scope, msgSrv, $location, $log) {

    $scope.showUpdMsg = false;
    $scope.updMsg = function () {
        $scope.showUpdMsg = true;
    }


});