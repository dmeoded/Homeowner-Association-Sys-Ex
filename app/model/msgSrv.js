
app.factory("msgSrv", function ($log, $http, $q, genSrv, userSrv) {

  var messages = [];

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
    var messages = [];

    console.log("msgType in msgSrv: ", msgType);

    {
      // Get all message from JSON - only for the first time
      $http.get("app/model/data/messages.json").then(function (res) {
        // success
        for (var i = 0; i < res.data.length; i++) {
          // messages.push(new Message(res.data[i]));
          console.log("msgType in msgSrv Loop: ", res.data[i].msgType);

          if (res.data[i].msgType === msgType) {
            messages.push(new Message(res.data[i]));
          }
        }
        async.resolve(messages); // resolving the promise with the messages array      
      }, function (err) {
        // error
        async.reject(err);  // rejecting the promise
      });
    }

    return async.promise;
  }


  function createMessage(title, msgType, desc, prio, file, issueStatus, issueDueDate) {
    var async = $q.defer();

    var activeUser = userSrv.getActiveUser().fullName;
    var newMessageId = genSrv.makeId(8);  // the id should be unique
    var newMessageObject = {
      id: newMessageId,
      msgType: "Message",
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


  function updateMessage(id, ncomment) {

    return "DDDDD";
  }

  function getMsgById(id) {
    var async = $q.defer();

    // Making sure that the messages are loaded
    getMsgs().then(function (messages) {
      async.resolve(messages[id]);
    }, function (err) {
      async.reject(err);
    });

    return async.promise;
  }


  return {
    getMsgs: getMsgs,
    createMessage: createMessage,
    updateMessage: updateMessage,
    getMsgById: getMsgById
  }

});