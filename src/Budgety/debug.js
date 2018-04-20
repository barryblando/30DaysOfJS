var data = {
  allItems: {
    exp: []
  }
};

var Expense = function(id, description, value) {
  this.id = id;
  this.description = description;
  this.value = value;
};

var newItem1, newItem2, newItem3, ids, id, index;

id = 1;

newItem1 = new Expense(1, 'description', 2500);
newItem2 = new Expense(2, 'destion', 2100);
newItem3 = new Expense(3, 'desripion', 2200);

data.allItems['exp'].push(newItem1);
data.allItems['exp'].push(newItem2);
data.allItems['exp'].push(newItem3);

ids = data.allItems['exp'].map(function(current) {
  return current.id;
  /* returns 0 : 1,  1 : 2, 2 : 3, 3 : 6 */
});
console.log(data.allItems['exp']);
// search and returns the index number of the element of the array that we innput
index = ids.indexOf(id);

console.log(index);


var calculatePercentage = function() {
  /**
   * Sample expenses
    - a = 10
    - b = 20
    - c = 40
    - income = 100
    - a = 10 / 100 = 10%
    - b = 20 / 100 = 20%
    - c = 40 / 100 = 40%
   */
};


var clearFields = function() {
  var fields, fieldsArr;
  //returns a node list, in a DOMtree, where all of the html elements of our page are stored, each element is called a node, Nodelist does not have the forEach method
  fields = document.querySelectorAll('.add__description' + ', ' +  '.add__value');
  /**
   * fields return
   * return [input.add__description, input.add__value]
   * length which 2 inputs
   * 0: input.add__description
   * 1: input.add__value
   * its __proto__: Nodelist
   */


  //this will trick the slice method into thinking that we give it an array so it will return an array, we can't do it like this fields.silce() 'cause fields is not an array.
  //call slice method in the Array prototype using .call so that it becomes the this variable
  //Array is the function constructor of all arrays and slice methods is in its prototype
  fieldsArr = Array.prototype.slice.call(fields);
  /**
   * after fieldsArr return
   * return [input.add__description, input.add__value]
   * length which 2 inputs
   * 0: input.add__description
   * 1: input.add__value
   * its __proto__: Array(0) , so we can now use any prototype under Array function Constructor
   */

  //we use foreach 'cause it moves over all of the elements of the fields array, and then sets the value of all of them back to empty string
  //<reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  //forEach(current value of array that is current being processed, index # 0 to the length of the array -1, the entire array);
  fieldsArr.forEach(function(current, index, arr) {
    //set the input.value property (description & value) of these back to empty
    current.value = '';
  });

  fieldsArr[0].focus();
};