app.factory("userSrv", function ($http, $q, $log) {

    var activeUser = null;

    function User(genUser) {
        this.id = genUser.id;
        this.fullName = genUser.fullName;
        this.email = genUser.email;
        this.tel = genUser.tel;
        this.aptNo = genUser.aptNo;
        this.flrNo = genUser.flrNo;
        this.isCommitteeMember = genUser.isCommitteeMember;
        this.isHomeOwner = genUser.isHomeOwner;
        this.communityId = genUser.communityId;
        this.remarks = genUser.remarks;
    }

    function login(email, pwd) {
        var async = $q.defer();

        $http.get("app/model/data/users.json").then(function (response) {
            var users = response.data;
            for (var i = 0; i < users.length; i++) {
                if (users[i].email === email && users[i].pwd === pwd) {
                    activeUser = new User(users[i]);
                    // console.log("The current array user in login lop:", users[i]);
                    // console.log("The active user in login lop:", activeUser);

                    async.resolve(activeUser);
                }
            }

            if (!activeUser) {
                console.log("The active user in login lop - invalid!");

                async.reject("");
            }
        }, function (error) {
            $log.error(error);
            async.reject(error);
        })
        return async.promise;
    }

    function isLoggedIn() {
        return activeUser ? true : false;
    }

    function isCommitteeUser() {
        // console.log("The active user is commettee member?" + JSON.stringify(activeUser));
        return isLoggedIn() && activeUser.isCommitteeMember ? true : false;
    }

    function logout() {
        activeUser = null;
    }

    function getActiveUser() {
        return activeUser;
    }

    // function getUserFullName() {
    //     return activeUser.fullName;
    // }

    return {
        login: login,
        isLoggedIn: isLoggedIn,
        logout: logout,
        getActiveUser: getActiveUser,
        // getUserFullName: getUserFullName,
        isCommitteeUser: isCommitteeUser
    }

});