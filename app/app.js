
var app = angular.module("hoaSystem", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "app/home/home.html"
    }).when("/login", {
        templateUrl: "app/login/login.html",
        controller: "loginCtrl"
    }).when("/signup", {

    }).when("/dashboard", {
        templateUrl: "app/dashboard/dashboard.html"

    }).when("/newTenant" , {

    }).otherwise({
        redirectTo: "/"
    })
})