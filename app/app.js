
var app = angular.module("hoaSystem", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "app/home/home.html"
    }).when("/login", {
        templateUrl: "app/login/login.html",
        controller: "loginCtrl"
    }).when("/signup", {

    }).when("/dashboard", {
        templateUrl: "app/dashboard/dashboard.html",
        controller: "dashboardCtrl"

    }).when("/tenants", {
        templateUrl: "app/tenants/tenants.html"

    }).when("/messages", {
        templateUrl: "app/messages/messages.html"
 
    }).when("/issues", {
        templateUrl: "app/issues/issues.html"
 
    }).when("/voting", {
        templateUrl: "app/voting/voting.html"
  
    }).when("/newTenant" , {
        templateUrl: "app//tenants/newTenant.html"

    }).otherwise({
        redirectTo: "/"
    })
})