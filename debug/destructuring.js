// --- Destructuring ---
// </ reference http://exploringjs.com/es6/ch_destructuring.html
// </ reference https://gist.github.com/mikaelbr/9900818
// </ reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const person = {
  first: 'Wes',
  last: 'Bos',
  country: 'Canada',
  city: 'Hamilton',
  twitter: '@wesbos'
}

// destructuring Syntax { } [ ]

const { first, last, twitter } = person;

// Destructuring nested data

const wes = {
  first: 'Wes',
  last: 'Bos',
  links: {
    social: {
      twitter: 'https://twitter.com/wesbos',
      facebook: 'https://facebook.com/wesbos.developer'
    },
    web: {
      blog: 'https://wesbos.com'
    }
  }
}
// store twitter as tweet & facebook as fb 'cause we already declared twitter in person
const { twitter: tweet, facebook: fb } = wes.links.social;

// destructuring w/ undefined value in object literal
const settings = { width: 300, color: 'black' };
// assigning fallback / default values
const {
  width,
  height = 100,
  color,
  fontSize = 25
} = settings;

// Object destructuring w/ variable renaming (:) & default values (i.e ReactJS)
const { width: w = 400, height: h = 500 } = { width: 800 };

const personO = {
  name: 'J XD',
  age: 32,
  city: 'Davao',
  gender: 'Male',
  sayHello() {
    console.log('Hello');
  }
};

const { nameO, age, city, sayHello } = personO;
sayHello();

// Destructuring Arrays
const details = ['Wes Bos', 123, 'wesbos.com'];
const [name, id, website] = details;

console.log(name, id, website);

// destructuring string to array
const data = 'Basketball, Sports, 90210, 23, wes, bos';
// when destructuring, if there's still string after last string it will be ignored and can't be destruct the rest unless you use rest operator
const [itemName, category, sku, inventory, ...values] = data.split(',');
console.log(itemName, category, sku, inventory, values);

({a, b, ...rest} = { a: 100, b: 200, c: 300, d: 400, e: 500});

// Swapping variables with destructuring, use Let
let inRing = 'Hulk Hogan';
let onSide = 'The Rock';
// it's going create an array of onSide, inRing and immediately destruct them into opposite variables.
console.log(inRing, onSide);
[inRing, onSide] = [onSide, inRing];
console.log(inRing, onSide);

// Destructuring Functions - Multiple returns in object & array and named defaults

function convertCurrency (amount) {
  const converted = {
    USD: amount * 0.76,
    GPB: amount * 0.53,
    AUD: amount * 1.01,
    MEX: amount * 13.30
  };
  return converted;
}

const {
  USD, GPB, AUD, MEX
} = convertCurrency(100);

console.log(USD, GPB, AUD, MEX);

function getPeople() {
  return ['John', 'Beth', 'Mike'];
}

let [person1, person2, person3] = getPeople();

// Named Default Values, if passed blank args set default argument to blank { arg default, etc..} = {}
function tipCalc ({ total, tip = 0.15, tax = 0.13 } = {}) {
  return total + (tip * total) + (tax * total);
}
// if you passed a blank args like tipCalc() you're gonna set default argument to blank
const bill = tipCalc({ total: 200, tip: 0.2, tax: 0.13 });
console.log(bill);
