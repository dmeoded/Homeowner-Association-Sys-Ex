app.controller("loginCtrl", function ($scope, $http, $location, $log, msgSrv, userSrv, genSrv) {

    $scope.invalidLogin = false;
    $scope.email = "dana@dana.com";
    $scope.pwd = "123";

    $scope.login = function () {
        userSrv.login($scope.email, $scope.pwd).then(function (activeUser) {
            $location.path("/dashboard");
        }, function () {
            $scope.invalidLogin = true;
        });

    }

})