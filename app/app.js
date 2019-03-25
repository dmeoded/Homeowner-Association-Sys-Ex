
var app = angular.module("hoaSystem", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "app/home/home.html"

    }).when("/login", {
        templateUrl: "app/login/login.html",
        controller: "loginCtrl"

    }).when("/signup", {
        templateUrl: "app/signup/signup.html"

    }).when("/dashboard", {
        templateUrl: "app/dashboard/dashboard.html",
        controller: "dashboardCtrl"

    }).when("/tenants", {
        templateUrl: "app/tenants/tanents.html",
        controller: "tenantCtrl"

    }).when("/messages", {
        templateUrl: "app/messages/messages.html",
        controller: "messageCtrl"

    }).when("/issues", {
        templateUrl: "app/issues/issues.html",
        controller: "issueCtrl"

    }).when("/votes", {
        templateUrl: "app/votes/votes.html"

    }).when("/newTenant", {
        templateUrl: "app/tenants/newTenant.html"

    }).when("/messages/:msgId", {
        templateUrl: "app/messages/messageDetail.html",
        controller: "messageDetailCtrl"

    }).when("/issues/:msgId", {
        templateUrl: "app/issues/issueDetail.html",
        controller: "issueDetailCtrl"

    }).otherwise({
        redirectTo: "/"
    })
})