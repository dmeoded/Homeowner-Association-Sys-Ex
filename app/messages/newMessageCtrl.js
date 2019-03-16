

app.controller("newMessageCtrl", function($scope, msgSrv, $location, $log) {
    
    $scope.createRecipe = function() {
        // call service createRecipe
        msgSrv.createMessage($scope.name, $scope.description, $scope.img.src, $scope.ingredients,  
            $scope.steps, $scope.duration).then(function() {
            $location.path("/messages");
        }, function(err) {
            $log.error(err);
        })
    };

});