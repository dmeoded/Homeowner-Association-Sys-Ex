
app.factory("msgSrv", function($log, $http, $q) {

    var messages = [];
    var wasEverLoaded = false;
  
    // Message constructor
    function Message(MsgObject) {
        this.id = MsgObject.id;
        this.createdBy = MsgObject.createdBy;
        this.createdAt = MsgObject.createdAt;
        this.title = MsgObject.title;
        this.prio = MsgObject.prio;
        this.comment = MsgObject.comment
    }
    
    function getMsgs() {
      var async = $q.defer();
      
      if (wasEverLoaded) {
        async.resolve(messages);
      } else {
        // Get all message from JSON - only for the first time
        $http.get("app/model/data/messages.json").then(function(res) {
          // success
          for (var i = 0; i < res.data.length; i++) {
            messages.push(new Message(res.data[i]));
          }
          wasEverLoaded = true;
          async.resolve(messages); // resolving the promise with the messages array      
        }, function(err) {
          // error
          async.reject(err);  // rejecting the promise
        });
      }
      
      return async.promise;
    }    
    
    
    function createMessage(title, comment, prio) {
      var async = $q.defer();
      
      var activeUserId = "dana" //userSrv.getActiveUser().id;
      var newMessageId = "3dddd";  // the id should be unique
      var newMessageObject = {
          id: newMessageId,
          title: title, 
          comment: comment,
          createdAt: "1335207592410",
          createdBy: activeUserId
      }
      var message = new message(newMessageObject);
      messages[activeUserId].push(newMessage);
      async.resolve(newMessage, messages[activeUserId]);

      return async.promise;
  }

    
    function getMsgById(id) {
      var async = $q.defer();
      
      // Making sure that the messages are loaded
      getMsgs().then(function(messages) {
        async.resolve(messages[id]);  
        console.log("current message from Srv:" + JSON.stringify(messages[id]));
      }, function(err) {
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