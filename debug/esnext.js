/* ES6 for Everyone */

/**
 *
 * ---- https://javascript.info/ ----
 * -- for more awesome guides --
 *
 */

// Const and Let Real World

/**
 * use const by default
 * Use var for top-level variables that are shared across many (especially larger) scopes (var shouldn't be used in es6).
 * Use let for localized variables in smaller scopes (only use let if rebinding is needed).
 * Refactor let to const only after some code has been written and you're reasonably sure that you've got a case where there shouldn't be variable assignment.
 */
{
  const person = {
    name: 'Wes',
    age: 28,
  };
  let x = 2;
  x = 3;
  console.log(`${person.name} ${x}`);
}

// <reference https://stackoverflow.com/questions/31219420/are-variables-declared-with-let-or-const-not-hoisted-in-es6
/* for (let i = 0; i < 10; i++) {
  console.log(i);
  // so in let after 1 second it will show all looped num, not 10 like in var, var got leaked before setTimeout IIFE reference it
  setTimeout(function () {
    console.log(`The number is ${i}`);
  }, 1000);
} */

/**
 * ARROWS
 */

/* const names = ['wes', 'kait', 'lux'];

const fullNames = names.map(function (name) {
  return `${name} boom`;
}); */

// ---ARROW---

// use parentheses if have more than one argument to use in a function i.e (name, .. )
/* const fullNames2 = names.map((name) => {
  return `${name} boom`;
}); */

// when removing curly braces is called implicit return means we don't need to specify that we are returning name if have single argument, if not passing argument just use parentheses i.e () => ..
/* const fullNames3 = names.map(name => `${name} boom`);

console.log(fullNames);
// console.log(fullNames2);
console.log(fullNames3);

// function expression
const sayName = (name) => {
  console.log(`${name}`);
}

// --- Object Literal ---
const users = [{ name: 'Max', age: 19 }, { name: 'Jane', age: 29 }, { name: 'Kate', age: 45 }];

const namesU = users.map(u => u.name); // names will equal to ['Max', 'Jane', 'Kate']

console.log(namesU);
sayName(names);

const [func1 = function () {}] = [];
console.log(func1.name); // func1 */

/* const race = '100m Dash';
const winners = ['Hunter Goth', 'Sing  a Song', 'Im da Bos'];

// --- Object Literal ---
// es6 can tell if name: value pair is redundant in naming like this in race:race we can just say variable race in other words object shorthand
const win = winners.map((winner, i) => ({ name: winner, race, place: i + 1 })); */

// Filtering
/* const ages = [23, 62, 45, 234, 2, 62, 232, 62, 34];
const old = ages.filter(age => age >= 60); */

// --- Arrow functions and this, open mini_projects/ box opening /arrow-functions-this ---

// --- Default function Args ---
// if nothing is pass in we set the default values
/* function calculateBill (total, tax = 0.13, tip = 0.15) {
  return total + (total * tax) + (total * tip);
}
// P.S you can do something like this calculateBill(100, undefined, 0.25), you should put undefined instead of blank 'cause it throws error
const totalBill = calculateBill(100);
console.log(totalBill); */

// --- When NOT to use an Arrow function ---
// <reference https://medium.com/@reasoncode/javascript-es6-arrow-functions-and-lexical-this-f2a3e2a5e8c4

/* // 1. When you really need `this`
const button = document.querySelector('#pushy');
// use regular function () instead of () => in order the `this` to be equal to the actual button
button.addEventListener('click', function () {
  this.classList.toggle('on');
});

// 2. When you need a method to bind to an object
const person = {
  points: 23,
  score () { // use regular function & object shorthand, which will give the actual "person" `this`
    this.points++;
  }
};

// 3. When you need to add a prototype method
class Car {
  constructor (make, colour) {
    this.make = make;
    this.colour = colour;
  }
}

const beemer = new Car('bmw', 'blue');
const subie = new Car('Subaru', 'white');

Car.prototype.summarize = function () { // use regular function to bound the `this` to class
  return `This car is ${this.make} in the colour ${this.colour}`;
}

// 4. When you need arguments object
const orderChildren = function () { // this function is going to take unlimited arguments, so we will use regular function
  const children = Array.from(arguments); // Array.from(arguments); arguments is keyword that we have in javascript that's going to give us an array or array-ish value of everything that was passed in. and you don't get the arguments object if you use an arrow function
  return children.map((child, i) => {
    return `${child} was child #${i + 1}`;
  });
}

// Preferred REST parameter instead of arguments
const orderChildren = function (...name) {
  const children = Array.from(name);
  return children.map((child, i) => {
    return `${child} was child #${i + 1}`;
  });
}

orderChildren('Chai'); */

// -- Arrow Exercise mini_projects -> arrow Exercises

// --- Template Strings / Literals using back ticks Exercise mini_projects -> template Strings ---

// --- Template Tagged Exercise mini_projects -> template Tagged ---

// map, reduce, filter
// </ reference https://danmartensen.svbtle.com/javascripts-map-reduce-and-filter
// </ reference http://adripofjavascript.com/blog/drips/boiling-down-arrays-with-array-reduce.html

// --- Using Array Reduce ---
// Data stored
/*
const rockets = [
  { country: 'Russia', launches: 32 },
  { country: 'US', launches: 23 },
  { country: 'China', launches: 16 },
  { country: 'Europe(ESA)', launches: 7 },
  { country: 'India', launches: 4 },
  { country: 'Japan', launches: 3 }
];

console.log(rockets.reduce((prevVal, elem) => prevVal + elem.launches, 0));
console.log(rockets.reduce((prevVal, elem, i) => `${prevVal}, ${elem.country} : ${elem.launches}`, 0));

const books = [
  {
    title: 'Showings',
    author: 'Julian of Norwich',
    checkouts: 45
  },
  {
    title: 'The Triads',
    author: 'Gregory Palamas',
    checkouts: 32
  },
  {
    title: 'The Praktikos',
    author: 'Evagrius Ponticus',
    checkouts: 29
  }
];

let bCheckouts = 0;

// traditional C-Style way to get at that number would be
for (let i = 0; i < books.length; i++) {
  bCheckouts += books[i].checkouts;
}

console.log(bCheckouts);

// get an array of checkout values only and sum the array's values from left to right 0 + 45 + 32 + 29
const bookCheckouts = books.map(item => item.checkouts).reduce((prev, curr) => prev + curr);

console.log(bookCheckouts);

// transform the relationship data from an array of arrays into an object
const relArray = [
  ['Viola', 'Orsino'],
  ['Orsino', 'Custavo'],
  ['Olivia', 'Munn']
];

const relMap = relArray.reduce(function (memo, curr) {
  memo[curr[0]] = curr[1];
  return memo;
}, {});
console.log(relMap);

// --- Strings Improvements ---

const course = 'RFB2';
const flightNumber = '20-AC2018-jz';
const accountNumber = '825242631RT0001';

const make = 'BMW';
const model = 'x5';
const colour = 'Royal Blue';

// these methods are case sensitive unless you use regex
// .startSWith()
flightNumber.startsWith('AC'); // false 'cause it starts w/ 20
flightNumber.startsWith('AC', 3); // true 'cause it starts at AC

// .endsWith() works similar with .startsWith()
course.endsWith('b2'); // true
accountNumber.endsWith('RT', 11); // true 'cause it only take first 11 numbers & ignore the rest

// .includes()
flightNumber.includes('AC'); // true

// .repeat() allows you to take a string to repeat over and over
function leftPad (str, length = 20) {
  return `=> ${' '.repeat(length - str.length)}${str}`; // =>       BMW
}

console.log(leftPad(make));
console.log(leftPad(model));
console.log(leftPad(colour));

// --- Javascript Idioms ---
// </ reference https://www.kochan.io/javascript/javascript-idioms.html
// </ reference http://javascriptissexy.com/12-simple-yet-powerful-javascript-tips/

// --- For Loops ---
// </reference http://exploringjs.com/es6/ch_for-of.html
// </reference https://www.eventbrite.com/engineering/learning-es6-for-of-loop/
// Iterable is anything that can be looped over. e.g Array, strings, map, set, generator

const cuts = ['Chuck', 'Brisket', 'Shank', 'Short Rib']; */
// cuts.shop = 'MM Eats';

// for (let i = 0; i < cuts.length; i++) {
//   console.log(cuts[i]);
// }

// the downside w/ forEach is that you can't stop/skip one of the ones and you can't use break; or continue;
// cuts.forEach((cut) => {
//   console.log(cuts);
// });

// the for in this doesn't just iterate over the items in the collection it iterates also on the things that have been added. all of sudden you add a property, or a method or anything to the array it's also going to show up. cuts.shop === [ shop: "MM Eats" ]
// for in gives you an index
// for (const index in cuts) {
//   console.log(cuts[index]);
// }

// the best of all three worlds. the for of loop. for absolutely any type of data, except objects. We can't use this w/ objects. but can use break; & continue; and won't loop on the newly added property in the array. again can't use for of in an object use for in.
// for (const cut of cuts) {
//   if (cut === 'Brisket') {
//     continue;
//   }
//   console.log(cut);
// }

// to get the destructed index & value of an array we'll use .entries()
// for (const [i, cut] of cuts.entries()) { // eslint-disable-line
//   console.log(`${cut} is the item ${i + 1}.`);
// }

// for of in a function
/* function addUpNumbers () {
  let total = 0;
  arguments is a special word that give array-ish output
  when you open up the console you can see that its prototype is Object not Array
  However you can iterate it with for of loop 'cause it has a symbol iterator
  for (const num of arguments) { // eslint-disable-line
    total += num;
  }
  console.log(total);
  return total;
}

addUpNumbers(10, 23, 52, 34, 12, 13, 123);

// for off in a string
const Nme = 'Barry Blando';
for (const char of Nme) { // eslint-disable-line
  console.log(char);
}

const apple = {
  color: 'red',
  size: 'Medium',
  weight: 50,
  sugar: 10
};

// using for in w/ Objects
// Object is not an iterable
for (const prop in apple) { // eslint-disable-line
  const value = apple[prop];
  console.log(value, prop);
}
 */
// Array.from and .of

// Array.from will take that is array-ish and turn it into a true array.

/* const people = document.querySelectorAll('.people p');
// Array.from will take second argument which map function
const peopleArray = Array.from(people, person1 => { // eslint-disable-line
  return person1.textContent;
});
const peopleArray = Array.from(people, person1 => person1.textContent); */

// console.log(peopleArray);

// Array.from in a function
/* function sumAll (...value) {
  const num = Array.from(value);
  return num.reduce((prev, next) => prev + next, 0);
}

sumAll(2, 34, 23, 234, 234, 234234);

// Array.of gonna create an array from argument you passed
const a = Array.of(12, 4, 23, 52, 34);
console.log(a);

// Array.find

// ignore the json syntax error from eslint
const posts = [
  {
    "code": "BAcyDyQwcXX",
    "caption":"Lunch #hamont",
    "likes":56,
    "id":"1161022966406956503",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12552326_495932673919321_1443393332_n.jpg"
  },
  {
    "code":"BAcJeJrQca9",
    "caption":"Snow! ⛄️🌨❄️ #lifewithsnickers",
    "likes":59,
    "id":"1160844458347054781",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg"
  },
  {
    "code":"BAF_KY4wcRY",
    "caption":"Cleaned my office and mounted my recording gear overhead. Stoked for 2016!",
    "likes":79,
    "id":"1154606670337393752",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/e35/923995_1704188643150533_1383710275_n.jpg"
  },
  {
    "code":"BAPIPRjQce9",
    "caption":"Making baby pancakes for one early rising baby. ☕️🍴",
    "likes":47,
    "id":"1157179863266871229",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12407480_1654828594805097_152207166_n.jpg"
  },
  {
    "code":"hZh6IQcfN",
    "caption":"New Stickers just came in. I'll do another mailing in a few weeks if you want some. #javascript",
    "likes":66,
    "id":"1126293663140399053",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/11875511_1562439187344831_813588280_n.jpg"
  },
  {
    "code":"B3eiIwcYV",
    "caption":"Tacos for breakfast. I love you Austin. 🇺🇸",
    "likes":33,
    "id":"1117418173361145365",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e35/11917950_927755223968499_1198055371_n.jpg"
  },
  {
    "code":"BAhvZrRwcfu",
    "caption":"Tried poke for the first time at @pokehbar. Delicious! It's like a bowl of sushi",
    "likes":30,
    "id":"1162418651480049646",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e35/12501993_1504179163220771_2060674913_n.jpg"
  },
  {
    "code":"BAAJqbOQcW5",
    "caption":"Brunchin'",
    "likes":40,
    "id":"1152964002473690553",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/1516572_445736812276082_2116173059_n.jpg"
  },
  {
    "code":"_4jHytwcUA",
    "caption":"2015 can be summed up with one baby and a many lines of code. And sometimes a coding baby. 👶🏼⌨",
    "likes":62,
    "id":"1150824171912152320",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e35/10723795_1149927178351091_1859033096_n.jpg"
  },
  {
    "code":"_zbaOlQcbn",
    "caption":"Lekker Chocoladeletter",
    "likes":52,
    "id":"1149382879529256679",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12346073_1035047523184672_768982339_n.jpg"
  },
  {
    "code":"_rmvQfQce8",
    "caption":"Just discovered the #hamont farmers market has a new ramen place! 🍜",
    "likes":35,
    "id":"1147180903383025596",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e35/12331739_1671776806423597_995664526_n.jpg"
  },
  {
    "code":"_ep9kiQcVy",
    "caption":"⛄️",
    "likes":64,
    "id":"1143535906423162226",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e35/12354078_447337935474115_1484398925_n.jpg"
  },
  {
    "code":"_XpJcrwcSn",
    "caption":"6 page spread on flexbox in this months netmag!",
    "likes":74,
    "id":"1141561999742846119",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12362588_1688046211438811_1395882545_n.jpg"
  },
  {
    "code":"_KnU7MwceA",
    "caption":"Hanging out in my office waiting for 5:00 beers to come around.",
    "likes":54,
    "id":"1137894817632733056",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12301208_1533749386944985_1334730917_n.jpg"
  },
  {
    "code":"_HMejJQcY5",
    "caption":"Today I learned that a long pull espresso is called a 'lungo'",
    "likes":18,
    "id":"1136932306813044281",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e35/12357319_493317964181479_310198908_n.jpg"
  },
  {
    "code":"_Fq2zmwcaz",
    "caption":"Awesome hand lettered gift from @eunibae and the HackerYou crew.",
    "likes":48,
    "id":"1136502965197194931",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12317458_1692845870986430_331905833_n.jpg"
  },
  {
    "code":"_A2r0aQcfD",
    "caption":"Some serious hardware meet JavaScript hacks going down this week at hackeryou. Excited for demo day!",
    "likes":57,
    "id":"1135147611821557699",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12276809_750065668431999_184252508_n.jpg"
  },
  {
    "code":"1rhFawccs",
    "caption":"Some major audio upgrades coming to my next videos 😍",
    "likes":39,
    "id":"1132002270913873708",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12331333_1650987978502155_1162510634_n.jpg"
  },
  {
    "code":"pjx-gQcVi",
    "caption":"My baby and me. Thanks to @bearandsparrow for this one.",
    "likes":81,
    "id":"1128590547628442978",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/e35/12298962_863814057068027_460827278_n.jpg"
  },
  {
    "code":"oTZ0zQcWt",
    "caption":"It's too early. Send coffee.",
    "likes":81,
    "id":"1128237044221461933",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/e35/12328347_990748230999662_1512917342_n.jpg"
  },
  {
    "code":"mxKQoQcQh",
    "caption":"They both have figured it out. #lifewithsnickers",
    "likes":47,
    "id":"1127804966031967265",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xtp1/t51.2885-15/e35/12256736_1758525004381641_1136705181_n.jpg"
  },
  {
    "code":"fasqlQceO",
    "caption":"Kaitlin decorated the house for the Christmas. So gezellig! #casabos",
    "likes":46,
    "id":"1125735850454402958",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/e35/12277581_1028556737218368_1184190781_n.jpg"
  },
  {
    "code":"VBgtGQcSf",
    "caption":"Trying the new Hamilton Brewery beer. Big fan.",
    "likes":27,
    "id":"1122810327591928991",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12224456_175248682823294_1558707223_n.jpg"
  },
  {
    "code":"FpTyHQcau",
    "caption":"I'm in Austin for a conference and doing some training. Enjoying some local brew with my baby.",
    "likes":82,
    "id":"1118481761857291950",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/e35/11326072_550275398458202_1726754023_n.jpg"
  }
];

// using .find and .findIndex in Array w/ Objects that comes from Instagram API
const code = 'VBgtGQcSf';
const post = posts.find(post => post.code === code);

const postIndex = posts.findIndex(post => post.code === code);
console.log(postIndex);

// Array.some & .every

const ages = [32, 15, 19, 12];

// 👵👨 is there at least one adult in the group?
const adultPresent = ages.some(age => age >= 18);
console.log(adultPresent); // true

// 🍻 is everyone old enough to drink?
const allOldEnough = ages.every(age => age >= 19);
console.log(allOldEnough); // false

// Spread operator / three apathetic dots in front of an array or any iterable

const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];

// concat arrays using spread
let pizzas = [...featured, 'veg', ...specialty];
// creating new array from a concatenated arrays using spread, you can mutate this new variable and not affecting the variable that has been passed to it should be equal to [...pizzas] not pizzas cause if we change something in array like fridayPizzas[0] = "Pie", so pizzas[0] = "Deep Dish" will be removed but if [...pizzas] it should be concatenated to current set of arrays strings,
const fridayPizzas = [...pizzas]; // doesn't affect pizzas array 'cause spread will just concatenate whatever data added and remove the data in the specified index
//const fridayPizzas = pizzas; // affects pizzas array

fridayPizzas[0] = "Pie";

console.log(fridayPizzas);
console.log(pizzas);

// spreading characters in a string
const char = [...'Barry'];
console.log(char);

const deepDish = {
  pizzaName: 'Deep Dish',
  size: 'Medium',
  ingredients: ['Marinara', 'Italian Sausage', 'Dough', 'Cheese']
};

console.log(deepDish.ingredients.map((ingredients, i) => `Item ${i}: ${ingredients});`))

// REST

// in function
function conCurrency (rate, tax, tip, ...amounts) {
  console.log(rate, tax, tip, amounts);
  return amounts.map(amount => amount * rate);
}

const amounts = conCurrency(1.54, 10, 23, 52, 1, 56);
console.log(amounts);

// in destructuring
const runner = ['Barry', 123, 5.5, 5, 3, 6, 35];
// name id runs
const [n, i, ...runs] = runner;
console.log(n, i, runs);

const team = ['Barry', 'Kat', 'Linux', 'Sheena', 'Kelly'];
const [captain, assistant, ...players] = team;
console.log(captain, assistant, players);

// Object literal upgrades

const fName = 'snicker';
const lName = 'bos';
const age = 2;
const breed = 'King Charles Cav';

const dog = {
  firstName: fName,
  last,
  age,
  breed,
  pals: ['Hugo', 'Konrad']
};

console.log(dog);

// Object Methods

const modal = {
  // this is shorthand the same thing as doing : function()
  create () { },
  open () { },
  close () { }
};

// Computed Property names [square bracket]

function invertColor (color) {
  return '#'  + ("000000" + (0xFFFFFF ^ parseInt(color.substring(1), 16)).toString(16)).slice(-6);
}

const key = 'pocketColor';
const value = '#ffc600';

const tShirt = {
  // what if we want opposite of pocket color using the same key
  [key]: value,
  [`${key}Opposite`]: invertColor(value)
};

console.log(tShirt);

const keys = ['size', 'color', 'weight'];
const val = ['medium', 'red', 100];

// The shift() method removes the first element from an array and returns that element. This method changes the length of the array.

const shirt = {
  // Essentially we just plucked off one from each of the arrays(keys & val) as we went through
  [keys.shift()]: val.shift(),
  [keys.shift()]: val.shift(),
  [keys.shift()]: val.shift(),
};

console.log(shirt);
 */

// --- Promises ---

// Promises are often used when you're fetching a JSON API and doing some AJAX work.
// Promise is a something that will happen between now and the end of time.
// Something that will happen in the future but probably not immediately.

/* const postPromise = fetch('http://wesbos.com/wp-json/wp/v2/posts');
this .then will only run when the promise/data successfully comes back and then function will give us the data
postPromise
  .then(data => data.json())
  .then(data => console.log(data))
  .catch((err) => { // if there's error - catch
    console.log(err);
  }); */

/*
Creating own Promise constructor
resolve - means it finishes and passes data back to you
reject - if there's an error or data was malformed, whatever the reason why to reject

const p = new Promise((resolve, reject) => {=
  setTimeout(() => {
    resolve(Error('Bar is cool'));
  }, 1000);
});

p
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  }); */

// </reference https://stackoverflow.com/questions/29824908/what-does-dehydrate-and-rehydrate-stand-for-in-fluxible

// const posts = [
//   { title: 'I love Javascript', author: 'Wes Bos', id: 1 },
//   { title: 'CSS!', author: 'Barry Blando', id: 2 },
//   { title: 'Dev tools tricks', author: 'Addy Osmani', id: 3 },
// ];

// const authors = [
//   { name: 'Wes Bos', twitter: '@wesbos', bio: 'Canadian Developer' },
//   { name: 'Barry Blando', twitter: '@Retr0_0x315', bio: 'Filipino Developer' },
//   { name: 'Addy Osmani', twitter: '@addyosmani', bio: 'Googler' },
// ];

// function getPostById(id) {
//   // create new promise
//   return new Promise(((resolve, reject) => {
//     // using a set timeout to mimic a database
//     setTimeout(() => {
//       // find  the post we want
//       const pst = posts.find(post => post.id === id);
//       if (pst) {
//         resolve(pst); // send the post back
//       } else {
//         reject(Error('No post was found!'));
//       }
//     });
//   }));
// }


// going to take in the Post
// function hydrateAuthor(post) {
//   // create new promise
//   return new Promise((resolve, reject) => {
//     // find the author
//     const authorDetails = authors.find(person => person.name === post.author);
//     if (authorDetails) {
//       // "hydrate" the post object with the author object
//       post.author = authorDetails;
//       resolve(post); // send the post back
//     } else {
//       reject(Error('Can\'t find the author.'));
//     }
//   });
// }

// getPostById(2)
//   .then((post) => { // once the post come back in this first one right here we're gonna call hydrateAuthor and pass it the post
//     console.log(post);
//     return hydrateAuthor(post); // this function is going to return a Promise itself
//   })
//   .then((post) => {
//     console.log(post);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Multiple Promises

/* const weather = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ temp: 29, conditions: 'Sunny with clouds'});
  }, 2000); // gonna show up after 2 seconds
});

const tweets = new Promise((resolve) => {
  setTimeout(() => {
    resolve(['I like cake', 'BBQ is good too!']);
  }, 500);
});

// instead of chaining .thens together, we can use promise.all
Promise
  .all([weather, tweets]) // we're all waiting for every single promise to be resolved before we run our then
  .then((responses) => {
    const [weather, tweets] = responses;
  });
 */

// const postsPromise = fetch('http://wesbos.com/wp-json/wp/v2/posts');
// const streetCarsPromise = fetch('http://data.ratp.fr/api/datasets/1.0/search/?q=paris');

// Promise
//   .all([postsPromise, streetCarsPromise]) // pass it both our initial promises
//   .then(responses => Promise.all(responses.map(res => res.json()))) // when those come back, we run .json() on all of them
  // convert body:ReadableStream(the postsPromise & streetCarsPromise) into JSON
  // don't just assume that the APIs or AJAX requests are always going to be json, 'cause it could be any type of data [blob(), text(), formData(), json()]
  // this responses in array and map takes every item out of array, does something to it, and then returns a new array
  // we're taking the array of responses and taking each one and calling .json() on it which returns a second promise, which we can call .then on
  // return Promise.all(responses.map(res => res.json()))
  // .then((responses) => {
  //   console.log(responses);
  // });

// ----------------------------------------------------------------
//  MAPS - a Map is to Object - can use ANY type as a key or value
// ----------------------------------------------------------------

const map1 = new Map();

// Set Keys
const key1 = 'some string',
      key2 = {},
      key3 = function() {};

// Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

const map2 = new Map([[ 'some string', 'Value of key1'],[ {}, 'Value of key1'], [ function(){}, 'Value of key1']]);

console.log(map2);

// Get values by key
console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// Count values
console.log(map1.size);

// -- Loop using for...of to get keys and values --
for (let [key, value] of map1) {
  console.log(`${key} = ${value}`);
}

// Iterate keys only
for (let key of map1.keys()) {
  console.log(`${key}`);
}

// Iterate values only
for (let value of map1.values()) {
  console.log(`${value}`);
}

// -- Loop using forEach --
map1.forEach(function(value, key) {
  console.log(`${key} = ${value}`);
});

// CONVERT TO ARRAY using Array.from

// Crate an array of the key value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);

// Create an array of the key
const keyArr = Array.from(map1.keys());
console.log(keyArr);

// Create an array of the values
const valArr = Array.from(map1.values());
console.log(valArr);

// ----------------------------------------------------------------
//  SETS - a Set is to arrays - Store unique values of any type
// ----------------------------------------------------------------

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({ name: 'Bar' });
set1.add(true);

const set2 = new Set([1, true, 'string']);

console.log(set2);

// Get count
console.log(set1.size);

// Check for values
console.log(set1.has(100));
console.log(set1.has(50 + 50));
console.log(set1.has({name: 'John'})) // false, cause is object is not a primitive type like number / string
console.log({name: 'John'} === {name: 'John'}); // false, cause save in another location of memory


// Delete from set
set1.delete(100);
console.log(set1);

// Iterate through SETS

// For..of
for (let item of set1) {
  console.log(item)
}

// ForEach
set1.forEach((value) => {
  console.log(value);
});

// CONVERT SET TO ARRAY
const setArray = Array.from(set1);
console.log(setArray);