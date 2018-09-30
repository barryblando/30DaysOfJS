// INFO: Reverse a String
function reverseString(str) {
  return str.split('').reverse().reduce((previousVal, currentVal) => previousVal + currentVal);
}

console.log(reverseString("hello"));

// INFO: FactorialIze a Number
function factorialIze(num) {
  return num >= 1 ? num * factorialIze(num -1) : 1;
}

console.log(factorialIze(5));

// INFO: Palindrome

function palindrome(str) {
  /* remove special characters, spaces and make lowercase*/
  var removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();

  /* reverse removeChar for comparison*/
  var checkPalindrome = removeChar.split('').reverse().join('');

  /* Check to see if str is a Palindrome*/
   return (removeChar === checkPalindrome);
}

console.log(palindrome("eye"));

// INFO: Find Longest Word
function findLongestWord(str) {
  return str.split(' ').reduce((longW, currentW) => currentW.length > longW.length ? currentW : longW, "").length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// INFO: Title Case a Sentence
function titleCase(str) {
  return str.toLowerCase().split(' ').map(word => word.replace(word[0], word[0].toUpperCase())).join(' ');
}

console.log(titleCase("I'm a little tea pot"));

// INFO: Larges t of Four

function largestOfFour(mainArray) {
  // Step 1. Map over the main arrays
  return mainArray.map(function(subArray) { // Step 3. Return the largest numbers of each sub-arrays => returns [5,27,39,1001]

    // Step 2. Return the largest numbers for each sub-arrays with Math.max() method,
    // can’t pass an array of numbers to the method like this​: Math.max(subArray) it logs NaN, so this is where apply() method turns to be useful
    return Math.max.apply(null, subArray);
  });
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// INFO: Longest String in Array
function longestString(arrayStr) {
  const longestArray = arrayStr.sort(str => str.length).map(str => str.length)[0]; // Get first index to tack/fill blank characters in padStart
  console.log(longestArray);
  arrayStr.forEach(str => console.log(str.padStart(longestArray)));
}

longestString(['short', 'medium size', 'this is really really long', 'this is really really really really long']);

// </reference https://medium.com/@sonya.moisset