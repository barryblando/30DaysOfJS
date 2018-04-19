// A way of creating interface of creating object but can let subclasses define which classes to instantiate
// In factory methods are often use in app to manage, maintain, manipulate collections of objects that are different
// but in same time have many common characteristics. (like Paid Membership Web Application), Different Types but have the same properties & methods

function MemberFactory() {
  this.createMember = function(name, type) {
    let member;

    if (type === 'simple') {
      member = new SimpleMembership(name);
    } else if (type === 'standard') {
      member = new StandardMembership(name);
    } else if (type === 'super') {
      member = new SuperMembership(name);
    }

    member.type = type;

    member.define = function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    }

    return member;
  }
}

const SimpleMembership = function(name) {
  this.name = name;
  this.cost = '$5';
}

const StandardMembership = function(name) {
  this.name = name;
  this.cost = '$15';
}

const SuperMembership = function(name) {
  this.name = name;
  this.cost = '$25';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Chris Redfield', 'super'));
members.push(factory.createMember('Claire Redfield', 'standard'));

members.forEach(function(member) {
  member.define();
});