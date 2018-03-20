class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there, ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  // static methods can only be called by Class name
  static addNumbers(x, y) {
    return x + y;
  }
}

// const mary = new Person('Mary', 'Williams', '11-13-1980');
// mary.getsMarried('Thompson')
// console.log(mary);

class Customer extends Person {
  constructor(firstName, lastName, dob, phone, membership) {
    super(firstName, lastName, dob);

    this.phone = phone;
    this.membership = membership;
  }
}

const john = new Customer('John', 'Doe', '11-13-1980', '555-555-5555,', 'Standard');

console.log(john);

// Initialize constructor functions
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

function Warrior(name, level, weapon) {
  Hero.call(this, name, level); // In ES6 Class this is super()

  this.weapon = weapon;
}

function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}

// Link prototypes and add prototype methods
Warrior.prototype = Object.create(Hero.prototype);
Healer.prototype = Object.create(Hero.prototype);

Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
}

Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
}

Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
}

// Initialize individual character instances
const hero1 = new Warrior('Bjorn', 1, 'axe');
const hero2 = new Healer('Kanin', 1, 'cure');

/**
 *
 * With this code we've created our Hero class with the base properties, created two character classes called Warrior and Healer from the           original constructor, added methods to the prototypes and created individual character instances. Conclusion, JavaScript is a prototype-based
   language, and functions differently than the traditional class-based paradigm that many other object-oriented languages use.

 * We learned how prototypes work in JavaScript, and how to link object properties and methods via the hidden [[Prototype]] property that all       objects share. We also learned how to create custom constructor functions and how prototype inheritance works to pass down property and method   values.
 *
 */