// INFO: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
function gatherArgs(fn) {
  // using rest operator in function parameter is to gather a set of values together from assignment context into an array (single value)
  return function gather(...args) {
    return fn(args);
  };
}

function fGather(args) {
  return args.reduce((prev, sum) => prev + sum, 0);
}

const g = gatherArgs(fGather);

// using rest expect individual values
g(1, 2, 3, 4); // <- assignment context // ?

// INFO: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
function spreadArgs(fn) {
  /* eslint-disable-next-line */
  return function spread(args) { // <- value context
    // using spread operator in function call is to spread/expand all those from value context (array) out into its individual values
    return fn(...args);
  };
}

function fSpread(x, y, z, w) {
  return x + y + z + w;
}

const s = spreadArgs(fSpread);

// using spread expect array literals
s([1, 2, 3, 4]); // ?
