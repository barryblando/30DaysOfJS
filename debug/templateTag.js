/* eslint-disable */

// IMPERATIVE
function strPreProcessor(strings, ...values) {
  var str = '';
  values
  strings
  for (var i = 0; i < strings.length; i++) {
    // i > 0 If already done with first string then include the values of zero but at the i - 1 position, one among string of one.
    // minus 1 'cause string always have more array values than values array
    i
    if (i > 0) {
      i
      if (typeof values[i-1] == "number") {
        str += values[i-1].toFixed(2);
      }
      str += values[i-1];
    }

    // then include strings of i
    str += strings[i];
  }
  return str;
}

var name = 'Barry';
var orderNumber = '123';
var total = 319.7;

strPreProcessor`Hello, ${name}, your order (#${orderNumber}) was $${total}.`; // ?

// DECLARATIVE
function upperCaseStr(strings, ...values) {
  // this is impure reducer, FP Police gonna come after me because of this
  // INFO: reducer isn't build to go over two lists but this thing I do.. give me exception
  const processedStrings = strings.reduce((str, currValue, currIndex) => {
    str
    currValue
    currIndex
    if (currIndex > 0) str += values[currIndex - 1].toUpperCase();
    return str += currValue;
  }, '');
  return processedStrings; // ?
}

var twitter = 'barryblando';
var className = 'functional programming workshop';

var upperStr = upperCaseStr`Hello ${name} (@${twitter}), welcome to the ${className}!`;
upperStr

