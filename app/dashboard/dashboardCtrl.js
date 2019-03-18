app.controller("dashboardCtrl", function ($scope, $location, userSrv) {

    if (!userSrv.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.activeUser = userSrv.getActiveUser();

    $scope.fullName = function () {

        userSrv.getUserFullName($scope.email, $scope.pwd).then(function (activeUser) {
            console.log("Hi Dana"); //Need to continue to check
        });

    }


})