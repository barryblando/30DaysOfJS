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
