
app.factory("msgSrv", function ($log, $http, $q, genSrv, userSrv) {

  var messages = [];
  var issues = [];
  var wereMsgsLoaded = false;
  var wereIssuesLoaded = false;


  // Message constructor
  function Message(MsgObject) {
    this.id = MsgObject.id;
    this.createdBy = MsgObject.createdBy;
    this.createdAt = MsgObject.createdAt;
    this.title = MsgObject.title;
    this.msgType = MsgObject.msgType;
    this.prio = MsgObject.prio;
    this.desc = MsgObject.desc,
      this.comment = MsgObject.comment,
      this.file = MsgObject.file,
      this.issueStatus = MsgObject.issueStatus,
      this.issueDueDate = MsgObject.issueDueDate
  }

  function getMsgs(msgType) {
    var async = $q.defer();
    console.log("msgType in msgSrv: ", msgType);
    if (wereMsgsLoaded) {
      async.resolve(messages);
    } else {
      // Get all message from JSON - only for the first time
      $http.get("app/model/data/messages.json").then(function (res) {
        // success
        for (var i = 0; i < res.data.length; i++) {
          // messages.push(new Message(res.data[i]));
          console.log("msgType in msgSrv Loop in getMsgs: ", res.data[i].msgType);

          if (res.data[i].msgType === msgType) {
            messages.push(new Message(res.data[i]));
          }
        }
        async.resolve(messages); // resolving the promise with the messages array      

      }, function (err) {
        // error
        async.reject(err);  // rejecting the promise
      
      });
      wereMsgsLoaded = true; 

    }

    return async.promise;
  }

  function getIssues(msgType) {
    var async = $q.defer();
    console.log("msgType in msgSrv: ", msgType);
    if (wereIssuesLoaded) {
      async.resolve(issues);
    } else {
      // Get all message from JSON - only for the first time
      $http.get("app/model/data/messages.json").then(function (res) {
        // success
        for (var i = 0; i < res.data.length; i++) {
          console.log("msgType in msgSrv Loop in getIssues: ", res.data[i].msgType);

          if (res.data[i].msgType === msgType) {
            issues.push(new Message(res.data[i]));
          }
        }
        async.resolve(issues); // resolving the promise with the messages array      
      }, function (err) {
        // error
        async.reject(err);  // rejecting the promise
      
      });
      wereIssuesLoaded = true; 

    }

    return async.promise;
  }


  function createMessage(title, msgType, desc, prio, file) {
    var async = $q.defer();

    var activeUser = userSrv.getActiveUser().fullName;
    var newMessageId = genSrv.makeId(8);  // the id should be unique
    var newMessageObject = {
      id: newMessageId,
      msgType: msgType,
      prio: prio,
      title: title,
      desc: desc,
      file: file,
      createdAt: new Date().getTime(),
      createdBy: activeUser,
      issueStatus: issueStatus,
      issueDueDate: issueDueDate
    }
    var newMessage = new Message(newMessageObject);
    messages.push(newMessage);
    async.resolve(newMessage, messages[activeUser]);

    return async.promise;
  }
  
  function createIssue(title, msgType, desc, prio, file, issueStatus, issueDueDate) {
    var async = $q.defer();

    var activeUser = userSrv.getActiveUser().fullName;
    var newMessageId = genSrv.makeId(8);  // the id should be unique
    var newMessageObject = {
      id: newMessageId,
      msgType: msgType,
      prio: prio,
      title: title,
      desc: desc,
      file: file,
      createdAt: new Date().getTime(),
      createdBy: activeUser,
      issueStatus: issueStatus,
      issueDueDate: issueDueDate
    }
    var newMessage = new Message(newMessageObject);
    issues.push(newMessage);
    console.log("createIssue in msgSrv: ", newMessage);

    async.resolve(newMessage, issues[activeUser]);

    return async.promise;
  }

  function updateMessage(id, ncomment) {

    return "DDDDD";
  }

  function getMsgById(id) {
    var async = $q.defer();

    // Making sure that the messages are loaded
    getMsgs().then(function (messages) {
      async.resolve(messages[id]);
      console.log("Message in msgSrv getMsgById: ", messages[id]);

    }, function (err) {
      async.reject(err);
    });

    return async.promise;
  }

  
  function getIssueById(id) {
    var async = $q.defer();

    // Making sure that the issues are loaded
    getIssues().then(function (issues) {
      async.resolve(issues[id]);
      console.log("Issue in msgSrv getIssueById: ", issues[id]);

    }, function (err) {
      async.reject(err);
    });

    return async.promise;
  }

  return {
    getMsgs: getMsgs,
    getIssues: getIssues,
    createMessage: createMessage,
    createIssue: createIssue,
    updateMessage: updateMessage,
    getMsgById: getMsgById,
    getIssueById: getIssueById

  }

});