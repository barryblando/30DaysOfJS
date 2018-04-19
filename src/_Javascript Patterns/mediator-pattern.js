// Mediator is used like on Chat Applications, Socket.io
// Chatroom is the mediator, users are the colleagues of the chatroom

const User = function(name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function(message, to) {
    // send to chatroom
    console.log(this); // this equals to(Object) User { name: "Barry", chatroom: { register: f, send: f } }
    this.chatroom.send(message, this, to); // this = User Object, to =  to user
  },
  receive: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

const Chatroom = function() {
  let users = {}; // list of users

  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this; // Set current chatroom
    },
    send: function (message, from, to) {
      if (to) {
        // Single user message
        to.receive(message, from);
      } else {
        // Mass message
        for (key in users) {
          if (users[key] !== from) { // not equal to from user
            users[key].receive(message, from);
          }
        }
      }
    }
  }
}

const barry = new User('Barry');
const chris = new User('Chris');
const claire = new User('Claire');

// Create Mediator Chatroom
const chatroom = new Chatroom();

// Register the users
chatroom.register(barry);
chatroom.register(chris);
chatroom.register(claire);

barry.send('Hello Claire! ', claire);
claire.send('Hi Barry, How are you?', barry);
chris.send('Hello Everyone!!!');