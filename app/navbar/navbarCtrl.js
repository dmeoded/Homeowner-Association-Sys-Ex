app.controller("navbarCtrl", function($scope, userSrv, $location) {


    $scope.isUserLoggedIn = function() {
        return userSrv.isLoggedIn();
    }

    $scope.isCommitteeUser = function() {
        return userSrv.isCommitteeUser();
    }     

    $scope.logout = function() {
        userSrv.logout();
        $location.path("/");
    }
})