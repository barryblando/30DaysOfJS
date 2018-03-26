// One line function does not need braces
// const arrFunc = () => console.log('Hello');

// One line returns (Implicit)
// const arrFunc = () => 'Hello';

// Return obj
// const arrFunc = () => ({ msg: 'Hello' });

// Single Parameter does not need parentheses
// const arrFunc = name => console.log(`Hello ${name}`);

// Multiple Parameters need parentheses
// const arrFunc = (fName, lName) => console.log(`${fName} ${lName}`);

const users = ['Nathan', 'Drake'];
const nameLengths = users.map(name => name.length);