function getStockSymbols(stocks) {
  /*var symbols = [],
      counter,
      stock;

  NOTE: forLoop Method
  for(counter = 0; counter < stocks.length; counter++) {
    stock = stocks[counter];
    symbols.push(stock.symbol);
  }

  NOTE: forEach Method
  stocks.forEach(stock => symbols.push(stock.symbol));

  return symbols;
  */

  // NOTE: Map Method
  return stocks.map(stock => stock.symbol);
}

const symbols = getStockSymbols([
  { symbol: 'XFX', price: 240.22, volume: 23423 },
  { symbol: 'TNZ', price: 332.12, volume: 234 },
  { symbol: 'JXJ', price: 140.22, volume: 5234 }
]);

console.log(JSON.stringify(symbols));

function getStocksOver(stocks, minPrice) {
  /*
    NOTE: ForEach Method
    var results = [];

    stocks.forEach(stock => stock.price >= minPrice ? results.push(stock) : '');

    return results;
  */
  // NOTE: Filter Method
  return stocks.filter(stock => stock.price >= minPrice);
}

const expensiveStocks = getStocksOver(
  [
    { symbol: 'XFX', price: 240.22, volume: 23423 },
    { symbol: 'TNZ', price: 332.12, volume: 234 },
    { symbol: 'JXJ', price: 140.22, volume: 5234 }
  ],
  150.00);

console.log(JSON.stringify(expensiveStocks));

function greet(whattosay) {
  // CLOSURE: One of the best feature of javascript
  // whattosay lexically sits on variable environment of greet
  return function(name) {
    // do scope chain getting whattosay where lexically sits also on greet memory space or outer
    console.log(whattosay + ' ' + name);
  }
}

const sayHi = greet('Hi'); // Invoke greet creating new execution context
sayHi('Tony');

function buildFunctions() {
  const arr = []; // array values will be put here arr = (5) [f, f, f, f, f, f]

  // when iterating value of this counter will be put in function and will add 1 to it
  for(let i = 0; i <= 5; i++) {
    arr.push(
      // when executed it's value remains at memory space and can be access by closure and put it to push
      (function(x) {
        return function () {
          console.log(x + 1); // 0, 1, 2, 3, 4, 5
        }
      }(i))
    );
  }
  return arr;
}

const fs = buildFunctions(); // array variable initialized buildFunctions

// INFO: https://stackoverflow.com/questions/3592468/can-i-store-javascript-functions-in-arrays
// functions inside the arrays, remember that functions are first class objects in JavaScript, Value(s) in an array are just one example of that.
// I iterate functions by 5 that I'm trying to put into an array and then execute one after the other
// for(let i = 0; i < 5; i++) {
  // reference an item element[i] inside the array and dynamically invoke it
//   fs[i]();
// }

fs[0]();
fs[1]();
fs[2]();
fs[3]();
fs[4]();
fs[5]();

function buildFn() {
  const arr = [];
  arr //?
  return arr;
}

const bFn = buildFn();
bFn[1]();

console.log("10" + 20 + 30);
console.log(20 + 30 + "10");

// Alternative for Proposal Optional Chaining Operator Javascript Stage 1

function get(obj, ...props) {
  obj
  props
  const val = obj[props[0]];
  console.log(val);
  if(props.length === 1 || !val) return val;
  const rest = props.slice(1);
  console.log(get.apply(null, [val, ...rest]));
  return get.apply(null, [val, ...rest]);
}

const user = { name: 'Fluffykins', address: { zip: 1234} };
const zip = get(user, 'address', 'zip');
console.log(zip);


const eventDay = {
  presentation(style, timeOfDay) {
    if (style === 'formal') {
      console.log(`Good ${timeOfDay}, Ladies  and gentlemen! I'm ${this.fName}, I'm a ${this.job}, and I'm ${this.age} years old.`);
    } else if (style === 'friendly') {
      console.log(`Hey! What's up? I'm ${this.fName}, I'm a ${this.job}, and I'm ${this.age} years old. Have a nice ${timeOfDay}.`)
    }
  }
};

const shamina = {
  fName: 'Shamina',
  age : 23,
  job : 'Web Designer'
}

const barry = {
  fName: 'Barry',
  age: 24,
  job: 'Web Developer'
};

const shaminaFormal = eventDay.presentation.bind(shamina, 'formal');
shaminaFormal('evening')

const barryFriendly = eventDay.presentation.bind(barry, 'friendly');
barryFriendly('evening')


function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr[i].length; j++) {
      console.log(product *= arr[i][j]);
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);



//Setup
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["Javascript", "Gaming", "Foxes"]
  }
];

function lookUpProfile(firstName, prop){
  // Only change code below this line
  var contact = contacts.find((x) => x.firstName === firstName);
  contact
  console.log(contact.hasOwnProperty(prop));
  console.log(contact[prop])
  return contact ? contact.hasOwnProperty(prop) ? contact[prop] : "No such property" : "No such contact";
}

// Change these values to test your function
console.log(lookUpProfile("Akira", "likes"));

// Arrow functions are different—they do not bind their own this, but can see the this binding of the scope around them. Thus you can do something like the following code, which references this from inside a local function.

function normalize() {
  console.log(this.coords.map(n => n / this.length));
}

// If I had written the argument to map using the function keyword, the code wouldn’t work.
normalize.call({coords: [0, 2, 3], length: 5});

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const transportation = data.reduce((obj, item) => {
  // if there's no object item exist in the list {} to work with at all
  if (!obj[item]) {
    console.log(`Object Found: ${item}`);
    // then set to 0, that will just set the initial one to zero
    obj[item] = 0;
  }
  console.log(obj);
  // then we can move along and increment it and return/add that to object (list {})
  obj[item]++;
  return obj;
}, {}); // object as an initial 'cause we don't know if that key exist

console.log(transportation);

const app = {
  next(hello) {
    console.log(hello);
  }
};

app['next']('Hi');