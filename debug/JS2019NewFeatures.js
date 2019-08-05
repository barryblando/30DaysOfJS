// MODULE: Private Fields

// class CounterDemo {
//     #counter = 0; From the counterDemo class, the #counter value is private. If we try to access the #counter, then syntax error will be shown.
// }

// MODULE: Array.flat will convert nested array items to a flat list. By default, it will convert 1 level deep. You can use

const arr = [ 1, [2 , [3 , 4 , [5 , 6 ] ]]]
arr.flat(Infinity);

// The output will be 1 2 3 4 5 6. if we use Infinity it will recursively convert to a flat list.


// MODULE: Object.fromEntries
// We have use Object.entries in many cases. It will return an array from an object. Similarly, we can use the Object.fromEntries that will return the object from an array. 
const object = { x: 42, y: 50, abc: 9001 };

// OBJECT TO ARRAY
const array = Object.entries(object); // ?

// ARRAY TO OBJECT
const obj = Object.fromEntries(
  Object.entries(object) // ?
    .filter(([key, value]) => key.length === 1) // ?
    .map(([key, value]) => [key, value * 2]) // ?
); // ?

const object2 = { language: 'JavaScript', coolness: 9001 };

// Convert the object into a Map:
const map = new Map(Object.entries(object2)); // ?

// Convert the Map back into an object:
const object2Copy = Object.fromEntries(map); // ?