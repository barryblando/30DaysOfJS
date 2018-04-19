// Basic structure

// (function() {
//   // Declare private vars and functions

//   return {
//     // Declare public var and functions
//   }
// })();

// STANDARD MODULE PATTERN
const UICtrl = (function() {
  let text = 'Hello World';

  const changeText = function() {
    const h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode(text));
    document.body.insertBefore(h1, document.body.firstChild);
  }

  return {
    callChangeText: function() {
      changeText();
      console.log(text);
    }
  }
})();

UICtrl.callChangeText();

// REVEALING MODULE PATTERN
const ItemCtrl = (function() {
  let _data = []; // Private Variable

  function add(item) {
    _data.push(item);
    console.log('Item Added...')
  }

  function get(id) {
    return _data.find(item => {
      return item.id === id;
    })
  }

  return {
    add,
    get
  }
})();

ItemCtrl.add({id: 1, name: 'John'});
ItemCtrl.add({id: 2, name: 'Barry'});