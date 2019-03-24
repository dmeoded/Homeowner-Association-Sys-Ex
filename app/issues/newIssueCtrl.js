
app.controller("newIssueCtrl", function ($scope, $rootScope, msgSrv, $location, $log) {

    $scope.createMessage = function () {
        $scope.msgType = "Issue";
        msgSrv.createMessage
        ($scope.title, $scope.msgType,  $scope.desc, $scope.prio, $scope.file, $scope.issueStatus, $scope.issueDueDate).then(function () {
            $location.path("/messages");
            $scope.showNewMsg = false;
        }, function (err) {
            $log.error(err);
        })
    };

    $scope.prio = "3-Low";
    $scope.msgStatus = "Open";


    $scope.invalideMsg = function () {
        return $scope.title? false: true;
     };
 

    $scope.resetForm = function () {
        $scope.title = null;
        $scope.desc = null;
        $scope.prio = null;
        $scope.file = null;
        $scope.issueStatus = null;
        $scope.issueDueDate = null;
    }

});