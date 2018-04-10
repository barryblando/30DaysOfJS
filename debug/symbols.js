// Sixth Primitive Data Type : Symbols generating unique identifier Symbol(descriptor) / Object Keys
// </reference https://javascript.info/symbol

// if you ever store some private data or want to make sure your keys in your object are absolutely unique that's when you reach for a symbol
// symbols aren't the actual object, symbols are just the property keys
const classRoom = {
  [Symbol('Mark')]: { grade: 50, gender: 'male' },
  [Symbol('Olivia')]: { grade: 80, gender: 'female' },
  [Symbol('Olivia')]: { grade: 80, gender: 'female' },
};

// Symbols are not enumerable (in for...in) means that we cannot loop over them and access its data unless use object get own property and map
const syms = Object.getOwnPropertySymbols(classRoom);
const data = syms.map(sym => classRoom[sym]);
console.log(data);

// Create a Symbol
// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

// console.log(Symbol('123') === Symbol('123')); // false
// console.log(`Hello ${sym1.toString()}`); // Hello Symbol()

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({key: 'prop'})); // {"key":"prop"}
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'})); // {}