// -------------------------------------------- //
// SHORTHAND CHARACTER CLASSES                 //
// -------------------------------------------- //

let re;
re = /\w/; // Word character - alphanumeric or _
re = /\w+/; // Match word w/ + = one or more times
re = /\W/; // Match any Non-Word character
re = /\d/; // Match any digit
re = /\d+/; // Match any digit 0 or more times
re = /\D/; // Match any Non-Digit
re = /\s/; // Match whitespace char
re = /\S/; // Match Non-whitespace char
re = /Bar\b/i; // Word boundary, looks for exact boundary

// Assertions - Conditionals
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x only if not followed by y

// String to match
const str = 'Barry, Welcome to Barx';
const result = re.exec(str);
console.log(result);

// Log Results
function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} DOESN'T match ${re.source}`)
  }
}

reTest(re, str);