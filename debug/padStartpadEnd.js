const arrayStr = ['short', 'medium size', 'this is really really long', 'this is really really really really long'];

// right align all string items
const longestArray = arrayStr.sort(str => str.length).map(str => str.length)[0]; // Get first index to tack/fill blank characters in padStart
console.log(longestArray);
arrayStr.forEach(str => console.log(str.padStart(longestArray)));

console.log('bar'.padEnd(6));
console.log('bar'.padEnd(6, 'Y')); // fill remaining blank at the end of bar