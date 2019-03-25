
app.controller("tenantCtrl", function ($scope, $http, $location, $log, msgSrv, userSrv, genSrv) {


    if (!userSrv.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.activeUser = userSrv.getActiveUser();

    // Loading the users
    $scope.users = [];
    userSrv.getUsers().then(function (users) {
        $scope.users = users;
    }, function (err) {
        $log.error(err);
    })


    // Filtering the user by title and comment (presentation logic)
    $scope.filterUsr = function (user) {
        if (!$scope.filterBy) {
            return true;
        } else if (
            user.fullName.toLowerCase().includes($scope.filterBy.toLowerCase()) ||
            user.email.toLowerCase().includes($scope.filterBy.toLowerCase()) 
        ) {
            return true;
        } else {
            return false;
        }
    }

    // Order logic (presentation logic)
    $scope.orderProp = "";
    $scope.reverseOrder = false;
    $scope.orderByProp = function (propName) {

        if ($scope.orderProp === propName) {
            // Clicking header for the first time
            $scope.reverseOrder = !$scope.reverseOrder;
        } else {
            // Clicking header for the first time
            $scope.orderProp = propName;
            $scope.reverseOrder = false;
        }
    }

    // Selected user (presentation logic)
    $scope.selectedUsr = null;
    $scope.selectUsr = function (user) {
        if ($scope.selectedUsr === user) {
            $scope.selectedUsr = null;
        } else {
            $scope.selectedUsr = user;
        }
        //   $log.info("The selected user is: " + $scope.selectedUsr.title);
    }

    $scope.showNewUsr = false;
    $scope.addUsr = function () {
        $scope.showNewUsr = true;
    }

    $scope.openUsr = function (user) {
        console.log("In openUsr", user);
        $location.path("users/" + $scope.users.indexOf(user));
    }


})