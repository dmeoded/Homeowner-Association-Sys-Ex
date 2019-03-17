app.controller("dashboardCtrl", function ($scope, $location, userSrv) {

    $scope.fullName = function () {

        userSrv.getUserFullName($scope.email, $scope.pwd).then(function (activeUser) {
            console.log("Hi Dana");
        });

    }

    if (!userSrv.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.activeUser = userSrv.getActiveUser();



})