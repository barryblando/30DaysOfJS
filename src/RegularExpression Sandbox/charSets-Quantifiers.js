// -------------------------------------------- //
// CHARACTER SETS                              //
// -------------------------------------------- //

// Brackets [] - Character Sets, better solution than optional & escape character
let re;

re = /gr[ae]y/i; // Must be an a or e;
re = /[GF]ray/; // Must be a G or F;
re = /[^GF]ray/; // Match anything except a G or F
// re = /^[GF]ray/; // Doesn't match anything except a G or F
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any letter
re = /[0-9]ray/; // Match any digit
re = /[0-9][0-9]ray/; // Match any digit, difficult method, easy method = Quantifiers { }

// -------------------------------------------- //
// QUANTIFIERS                                 //
// -------------------------------------------- //

// Braces {} - Quantifiers

re = /Hel{2}o/i; // Must occur exactly {var} amount of times
re = /Hel{2,4}o/i; // Must occur exactly {min-max} amount of times
re = /Hel{2,}o/i; // Must occur at least {var} times

// Parentheses () - Grouping
re = /^([0-9]x){3}$/; // equals to 3x3x3x
re = /([0-9]x){3}$/; // equals to as many as 3xs


// String to match
const str = '3x3';
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