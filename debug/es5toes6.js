/**
 * In ES5 in order to achieve data privacy we used IIF Expression(function scope) so that it can't be accessed outside that function, so using var are function-scope but in ES6 const and let are block-scope e.g curly braces..
 */

// Block Scope
{
  const name = 'Bar';
  let x = 2;
  x = 3;
  console.log(name); // so name will be accessible only within this block scope { ... }
  console.log(x); // x too
}

// const firstName = 'John Smith';
/* When using template literal don't forget back ticks not single quote
console.log(`${firstName}`);

const years = [1993, 1994, 1995];
const years2 = [1991, 1992, 1996];

/**
 * ARROWS
 */

/* ES5 */
/* ages = years.map(function(el) {
    return 2017 - el;
  });
 */

/* ES6 */
/* let age = years.map(el => 2017 - el);

console.log(age); */

/* if we have more than one argument we need to include parentheses e.g () =>
age = years.map((el, index) => `Age element ${index + 1}: ${2017 - el}.`);

console.log(age);

age = years2.map((el, index) => {
  const now = new Date().getFullYear();
  age = now - el;
  return `Age element ${index + 1}: ${age}.`;
});

console.log(age);

/* const box6 = { ---- Be careful in using arrow for sharing lexical keyowrd ---
  color: 'green',
  position: 1,
  clickMe() {
    /**
     * don't use clickMe: () => 'cause arrow already used in click event
     * also ckickMe: () => no longer has its own this keyword
    /**
     * let's use arrow function in click so it can share the lexical this keyword
     * from its surroundings === global context box6
    document.querySelector('.green').addEventListener('click', () => {
      var str = `This is box number ${this.position} and it is ${this.color}`;
      alert(str);
    });
  },
};
box6.clickMe();

function Person(name) {
  this.name = name;
}
*/
/* // ES5
Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(function(el) {
    return this.name + ' is friends with ' + el;
  }.bind(this)); //we use bind trick in order to use the this keyword
  console.log(arr);
};

const friends = ['Bob', 'Jane'];

new Person('John').myFriends5(friends);
*/

// ES6

/* Person.prototype.myFriends6 = function(friends) {
  const arr = friends.map(el => `${this.name} is friends with ${el}`);
  console.log(arr);
};

const friends = ['Bob', 'Jane'];
new Person('John').myFriends6(friends);
 */

/**
 * DESTRUCTURING
 */

/* ES5
--Impractical--
var john = ['John', 26];
var name = john[0];
var ageJ = john[1];
*/

/**
 * Let's use ES6 destructuring to destructure the data structure
 */

/* const [nameJ, ageJ] = ['John', 26]; // so this one gonna create constant name and age

console.log(nameJ);
console.log(ageJ); */

/* Object Destructuring */

/* const obj = {
  firstName: 'John',
  lastName: 'Smith',
};

const { firstName, lastName } = obj;
console.log(firstName);
console.log(lastName); */

/* Assign to a new constant name */
/* const { firstName: a, lastName: b } = obj;
console.log(a);
console.log(b); */

/* Return Multiple values from a function */

/* function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age, retirement] = calcAgeRetirement(1990);

console.log(age);
console.log(retirement); */

/**
 * ARRAYS
 */

/* const boxes = document.querySelectorAll('.box'); */

/**
 * document doesn't return an array, it returns node list so in order return array we use
 * Array.prototype.slice.call();
 */

/* ES5 */

/* var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function (cur) {
  cur.style.backgroundColor = 'dodgerblue';
}); */

/**
 * ES5 Change text in boxes
 * for (let i = 0; i < boxesArr5.length; i++) {
      if (boxesArr5[i].className === 'box blue') {
        continue;
      }
      boxesArr5[i].textContent = 'I changed to Blue!';
    }
  */

/* ES6 */

/* from method transform nodelist into array e.g const boxesArr6 = Array.from(boxes) then boxesArr6.forEach() */
/* Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue'); */ /* w/ this short code we cannot use break & continue statement,
if we want to use break & continue in for loops we can't use forEach method and also Map, all we can do is to use for loop in ES5 */
/* const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');
 */
/**
  * ES6 Change text in boxes using for off
  */

/* for (const cur of boxesArr6) {
  if (cur.className.includes('blue')) {
    continue;
  }
  cur.textContent = 'I changed to Blue!';
} */

/* var ages = [12, 17, 8, 21, 14, 11];
 */
/**
 * ES5
 */

/* var full = ages.map(function (cur) {
  return cur >= 18; // greater than or equal
}); */

/* console.log(full);  false false false true false false */
/* find the true using indexOf */
/* console.log(full.indexOf(true));  3 */
/* console.log(ages[full.indexOf(true)]);  21 */

/**
 * ES6
 */
/* console.log(ages.findIndex(cur => cur >= 18));  3 */
/* console.log(ages.find(cur => cur >= 18));  21 */

/**
 * SPREAD OPERATOR
 * </reference https://stackoverflow.com/questions/31048953/what-do-these-three-dots-in-react-do
 * </reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
 */

/* function addFourAges (a, b, c, d) {
  return a + b + c + d;
}
 */
/* ES5
var sum2 = addFourAges.apply(null, ages);
console.log(sum2); */ /* 58 */

/**
 * ES6
 * using spread operator (...)
 * spread operator is used in the function call
 */
/* so this will expand array and transform it into single values */
/* const sum3 = addFourAges(...ages); */
/* console.log(sum3); */ /* 58 */

/* We can also use spread to join arrays */
/* const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith, ...familyMiller];

console.log(bigFamily); */

/* also in Nodelist */

/* const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple'); */

/**
 * REST Parameters
 * it receives a couple of single values and transforms them into array
 * when we call a function with multiple parameters
 * rest operator is used in the function declaration to accept an arbitrary number of parameters
 * </reference https://stackoverflow.com/questions/31048953/what-do-these-three-dots-in-react-do
 */

/* ES5
function isFullAge5 () {
  var argsArr;
  console.log(arguments);
  /* trick again using .slice.call to transform into array
  argsArr = Array.prototype.slice.call(arguments);
  argsArr.forEach(function (cur) {
    console.log((2017 - cur) >= 18);
  });
}

isFullAge5(1990, 2000, 1965);
*/

/* ES6 */

/* so this will transform into array automatically using rest operator (...) */
/* function isFullAge6 (...years) {
  years.forEach(cur => console.log((2017 - cur) >= 18));
}

isFullAge6(1990, 2000, 1965, 2016, 1987); */

/* Another Sample if we want to put an argument in function declaration */

/* ES5 - Complicated
function isFullAge5 (limit) {
  var argsArr;
  console.log(arguments);
  /* trick again using .slice.call to transform into array starting in position 1
  argsArr = Array.prototype.slice.call(arguments, 1);
  console.log(argsArr);
  argsArr.forEach(function (cur) {
    console.log((2017 - cur) >= limit);
  });
}

//isFullAge5(18, 1990, 2000, 1965); */

/* ES6 - Easy to use */

/* so this will transform into array automatically using rest operator (...) */
/* function isFullAge6 (limit, ...years) {
  years.forEach(cur => console.log((2017 - cur) >= limit));
}

isFullAge6(18, 2000, 1965, 2016, 1987); */

/**
 * Default Parameters
 * we use it whenever we want one or more parameters of a function to be preset,
 * so we want to have default value
 */

/* using function Constructor */

/* ES5 */

/* function Person (firstName, yearOfBirth, lastName, nationality) {
  lastName = lastName === undefined ? lastName = 'Smith' : lastName;
  nationality = nationality === undefined ? nationality = 'American' : nationality;
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john, emily; */
/* Javascript actually allows us to call any function w/o specifying all of the args */
/* so lastname and nationality will be undefined */
/* john = new Person('John', 1990);
emily = new Person('Emily', 1983, 'Diaz', 'Spanish'); */

/* ES6 */

/* function Person (firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
} */

/*
const john = new Person('John', 1990);
const emily = new Person('Emily', 1983, 'Diaz', 'Spanish');
 */
/**
 * MAPS
 * is like object literal, key value pair too
 * key : value pair maybe int : string, numbers : function(), boolean : string, etc. no custom data type for the key & value.
 * there are ways to manipulate Map, .set to set the key:value pair, .get to get the key
 * </ reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
 */

/* const question = new Map();
// Key, value
question.set('question', 'What is the official name of the latest major Javascript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('Correct', 3);
question.set(true, 'Correct Answer');
question.set(false, 'Try Again');

// console.log(question.get('question'));
// get the length of the question Map using .size, Array is .length
// console.log(question.size);

if (question.has(4)) {
  // question.delete(4);
  // console.log('Answer ')
} */
// to clear everything on map use question.clear();

// Maps is iterable we can use loops that we can't use in objects, let's access the value & key
// using forEach
// question.forEach((value, key) => console.log(`${key} => ${value}`));

// using for of & destructuring to store the values
/* for (let [key, value] of question.entries()) {
  if (typeof(key) === 'number') { // typeof to check the type of a variable
    console.log(`Answer ${key} => ${value}`);
  }
}

const ans = parseInt(prompt('Write the correct Answer'));

console.log(question.get(ans === question.get('correct'))); */ /* 'correct' = 3 if statement is true it's gonna retrieve the string for true,
if false then it's going to retrieve the string for false */

/**
 * CLASSES
 */

/* ES5 */

/* var Person5 = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person5.prototype.calculateAge = function () {
  var age = new Date().getFullYear - this.yearOfBirth;
  console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher'); */

/* ES6 */
// all classes must have constructor
/* class Person6 {
  constructor (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }
  // using static so method can't be inherited
  static greeting () {
    console.log('Hey There!');
  }
}

const john6 = new Person6('John', 1990, 'Teacher');
console.log(john6.calculateAge());

// let's invoke the static method
Person6.greeting(); */

/**
 * CLASSES WITH SUB CLASSES
 * </reference http://cheng.logdown.com/posts/2016/03/26/683329
 */

/* ES5 */

/* var Person5 = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person5.prototype.calculateAge = function () {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
}

var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {
  NOTE: inherit Person 5 using .call not the 'new' method
  Person5.call(this, name, yearOfBirth, job);
  this.olympicGames = olympicGames;
  this.medals = medals;
}

NOTE: Inheritance, create prototype chain using object.create(), so Athlete will be connected to Person P.S this must be declared & defined first before adding a prototype method
Athlete5.prototype = Object.create(Person5.prototype);

NOTE: Make athlete5.prototype return Athlete5()
Athlete5.prototype.constructor = Athlete;

NOTE: this[prototype property] will be inherited by the Athlete5 instances not the Person5 Instances
Athlete5.prototype.wonMedal = function () {
  this.medals++;
  console.log(this.medals);
}

INFO: Person5 is the SuperClass while the Athlete5 is the SubClass
var johnAthlete5 = new Athlete5('John', 1990, 'Swimmer', 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal(); */

/* ES6 */

/* class Person6 {
  constructor (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    if (age >= 18) {
      console.log(`He's ${age} which is Good for being an Athlete.`);
    } else {
      console.log(`He's ${age} which is not Good for being an Athlete.`);
    }
  }
  // method that can't be inherited
  static greeting () {
    console.log('Hey There!');
  }
}

// extends SuperClass
class Athlete6 extends Person6 {
  constructor (name, yearOfBirth, job, olympicGames, medals) {
    // 'cause our Super class have constructor then we're gonna call it using super() and we're gonna call it first before using this.
    super(name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }

  wonMedal () {
    this.medals++;
    console.log(`${this.name} won ${this.medals} medals`);
  }

  myFriends (friends) {
    const arr = friends.map(el => `${this.name} is friends with ${el}`);
    console.log(arr);
  }
}

const john = ['John', 1990, 'Swimmer', 3, 10];

const johnAthlete6 = new Athlete6(...john);

const johnFriends = ['Barry', 'Alyssa', 'Rain'];

johnAthlete6.myFriends(johnFriends);
johnAthlete6.wonMedal();
johnAthlete6.calculateAge();
*/

class Elements {
  constructor (name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Elements {
  constructor (name, buildYear, area, numTrees) {
    super(name, buildYear);
    this.area = area; // unit to use km2
    this.numTrees = numTrees;
  }

  treeDensity () {
    const density = this.numTrees / this.area;
    console.log(`${this.name} has a tree density of ${density} tress per square km.`);
  }
}

class Street extends Elements {
  constructor (name, buildYear, len, size = 3) {
    super(name, buildYear);
    this.len = len;
    this.size = size;
  }

  classifyStreet () {
    const classification = new Map();

    classification.set(1, 'Tiny');
    classification.set(2, 'Small');
    classification.set(3, 'Normal');
    classification.set(4, 'Big');
    classification.set(5, 'Huge');
    console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
  }
}

const allParks = [new Park('Green Park', 1987, 0.2, 215), new Park('National Park', 1894, 2.9, 3541), new Park('Oak Park', 1953, 0.4, 949)];
const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4), new Street('Evergreen', 2008, 2.7, 2), new Street('4th Street', 2015, 0.8), new Street('Sunset Boulevard', 1982, 2.5, 5)];

function calc (arr) {
  // <reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=a
  // add all element in array using reduce (previous, current, index), 0 = InitialValue /  value of Accumulator, if present it will set where to start
  const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
  // [0, 1, 2]
  // [3, 5, 6] = 14
  // { return totalAge, avgAge for parks } { return totalLength, avgLength for streets }
  return [sum, sum / arr.length];
}

function reportParks (p) {
  console.log('------PARKS REPORT------');
  // Density
  p.forEach(el => el.treeDensity());

  // Average age
  const ages = p.map(el => new Date().getFullYear() - el.buildYear);
  const [totalAge, avgAge] = calc(ages);
  console.log(`Our ${p.length} parks have an average of ${avgAge} years. Total Age: ${totalAge} years.`);

  // Which park has more than 1000 trees, we'll use map to return a new array
  const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
  console.log(`${p[i].name} has more than 1000 trees.`);
}

function reportStreets (s) {
  console.log('------STREETS REPORT------');
  // Total and Average length of the town's streets
  const [totalLength, avgLength] = calc(s.map(el => el.len));
  console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);
  // Classify sizes
  s.forEach(el => el.classifyStreet()); // e.g el = new Street('Ocean Avenue', 1999, 1.1, 4) and view all in classifyStreet
}

reportParks(allParks);
reportStreets(allStreets);
