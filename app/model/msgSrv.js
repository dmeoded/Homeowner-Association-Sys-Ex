
app.factory("msgSrv", function ($log, $http, $q, genSrv, userSrv) {

  var messages = [];
  var wasEverLoaded = false;

  // Message constructor
  function Message(MsgObject) {
    this.id = MsgObject.id;
    this.createdBy = MsgObject.createdBy;
    this.createdAt = MsgObject.createdAt;
    this.title = MsgObject.title;
    this.prio = MsgObject.prio;
    this.desc = MsgObject.desc,
      this.comment = MsgObject.comment,
      this.file = MsgObject.file
  }
  
  function getMsgs() {
    var async = $q.defer();

    if (wasEverLoaded) {
      async.resolve(messages);
    } else {
      // Get all message from JSON - only for the first time
      $http.get("app/model/data/messages.json").then(function (res) {
        // success
        for (var i = 0; i < res.data.length; i++) {
          messages.push(new Message(res.data[i]));
        }
        wasEverLoaded = true;
        async.resolve(messages); // resolving the promise with the messages array      
      }, function (err) {
        // error
        async.reject(err);  // rejecting the promise
      });
    }

    return async.promise;
  }


  function createMessage(title, desc, prio, file) {
    var async = $q.defer();

    var activeUserId = userSrv.getActiveUser().fullName;
    var newMessageId = genSrv.makeId(8);  // the id should be unique
    var newMessageObject = {
      id: newMessageId,
      prio: prio,
      title: title,
      desc: desc,
      file: file,
      createdAt: new Date().getTime(),
      createdBy: activeUserId
    }
    var newMessage = new Message(newMessageObject);
    messages.push(newMessage);
    async.resolve(newMessage, messages[activeUserId]);

    return async.promise;
  }

  function updateMessage(id, comment) {
    var myTest = "my testing";

    console.log("current message from msgSrv updateMessage:", myTest);

    return myTest;

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
    getMsgById: getMsgById
  }

});