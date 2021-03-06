app.factory("userSrv", function ($http, $q, $log) {

    var users = [];
    var activeUser = null;
    var wereLoaded = false;


    function User(genUser) {
        this.id = genUser.id;
        this.fullName = genUser.fullName;
        this.email = genUser.email;
        this.tel = genUser.tel;
        this.aptNo = genUser.aptNo;
        this.flrNo = genUser.flrNo;
        this.tel = genUser.tel;
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

    function getUsers() {
        var async = $q.defer();
        console.log("In getUsers: ");
        if (wereLoaded) {
            async.resolve(users);
        } else {
            // Get all users from JSON - only for the first time
            $http.get("app/model/data/users.json").then(function (res) {
                // success
                for (var i = 0; i < res.data.length; i++) {
                    console.log("In getUsers Loop: ", res.data[i].fullName);
                    users.push(new User(res.data[i]));
                }
                console.log("In getUsers - users array: ", users);
                async.resolve(users); // resolving the promise with the users array      
            }, function (err) {
                // error
                async.reject(err);  // rejecting the promise

            });
            wereLoaded = true;
        }

        return async.promise;
    }

    function getUsrById(id) {
        var async = $q.defer();

        // Making sure that the issues are loaded
        getUsers().then(function (users) {
            async.resolve(users[id]);
            console.log("User in userSrv getUsrById: ", users[id]);

        }, function (err) {
            async.reject(err);
        });

        return async.promise;
    }

    // function getUserFullName() {
    //     return activeUser.fullName;
    // }


    return {
        login: login,
        isLoggedIn: isLoggedIn,
        logout: logout,
        getActiveUser: getActiveUser,
        getUsers: getUsers,
        getUsrById: getUsrById,
        // getUserFullName: getUserFullName,
        isCommitteeUser: isCommitteeUser
    }

});