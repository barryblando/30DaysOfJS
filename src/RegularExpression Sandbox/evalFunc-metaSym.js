// -------------------------------------------- //
// EVALUATION FUNCTION                         //
// -------------------------------------------- //

let re;
re = /hello/;
re = /hello/i; // /hello/i = case insensitive
// re = /hello/g; // /hello/g = Global search

// console.log(re);
// console.log(re.source); // source will keep out the slashes and give the expressions

// exec() - Return result in an array or null
const resultE = re.exec('hello world');
console.log(resultE);

// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - Returns true or false
const resultT = re.test('Hello');
console.log(resultT);

// match() - Return result array or null
const strM = 'Hello There';
const resultM = strM.match(re);
console.log(resultM);

// search() - Returns index of the first match, if not found returns -1
const strS = 'Bar Hello There';
const resultS = strS.search(re);
console.log(resultS);

// replace() - Return new string with some or all matches of a pattern
const strR = 'Hello There';
const newStrR = strR.replace(re, 'hi');
console.log(newStrR);

// -------------------------------------------- //
// META-CHARACTER SYMBOLS                      //
// -------------------------------------------- //

let re2;

// Literal Characters
re2 = /hello/;

// Meta-character Symbols
re2 = /^h/i; // Must start with
re2 = /world$/i; // Must ends with
re2 = /^hello$/i; // Must begin and end with
re2 = /h.llo/i; // Matches any ONE character
re2 = /h*llo/i; // Matches any character 0 or more times
re2 = /gre?a?y/i; // Optional Character
re2 = /gre?a?y\?/i; // Escape Character

// String to match
const strRe = 'Gray?';
const resultRe = re2.exec(strRe);
console.log(resultRe);

// Log Results
function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} DOESN'T match ${re.source}`)
  }
}

reTest(re2, strRe);