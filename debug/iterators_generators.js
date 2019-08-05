/* eslint-disable */
const dragons = ['cool dragon', 'angry dragon', 'nasty dragon'];

const iterator = dragons[Symbol.iterator]();
iterator.next() //?
iterator.next() //?
iterator.next() //?
iterator.next() //?

for (const dragon of dragons) {
  dragon
}

// ------------------------------------------------------------------------------------
// </reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
// </reference https://fireship.io/snippets/javascript-loops-pro-tips/

const randomNumber =
  require('random-number');

function randomItem(array) {
  const randomIndex = randomNumber({
    min: 0,
    max: array.length -1,
    integer: true
  });
  return array[randomIndex];
}

const makeDragon = () => {
  const dragonSizes = ['big', 'medium', 'tiny'];
  const dragonAbilities = ['fire', 'water', 'lightning']
  return `${randomItem(dragonSizes)} ${randomItem(dragonAbilities)} dragon`;
}



// Example 1
const dragonArmy = {
  // User-defined iterable added to object property
  [Symbol.iterator]: () => { // ?
    return {
      // Iterator Protocol next() method which returns an object with two properties: value, the next value in the sequence; and done, which is true if the last value in the sequence has already been consumed. If value is present alongside done, it is the iterator s return value.
      next: () => {
        const enoughDragonsSpawned = Math.random() > 0.75;
        enoughDragonsSpawned //?
        if (!enoughDragonsSpawned)
          return {
            value: makeDragon(),
            done: false
          } //?
        return { done: true } // ?
      } //?
    }
  }
} // ?

for (const dragon of dragonArmy) {
  dragon // ?
}

// Example 2
const arr = ['Badger', 'Raccoon'];

// User-defined iterable added to array list
arr[Symbol.iterator] = function() {
  let i = 0;
  let arr = this;

  return {
    next: function() {
      if (i >= arr.length) {
        return { done: true }
      } else {
        const value = arr[i] + ' 🙈';
        i++;
        return { value, done: false };
      }
    }
  };
};

// So how does the for-of loop really work? Well it’s actually just an iterator function. In fact, we can override the behavior of the loop by implementing our own from scratch. In this case, we append an emoji 🙈 to each element in the loop just because we can.

// An iterator is a Function that defines how a loop works. An iterable is something you can loop over (or call the iterator function on), like an Array/Object.

for (const e of arr)  {
  console.log(e)
}


// INFO:
// The for...in iterates over all non-Symbol, enumerable properties of an object. In short works with `key` in key:value pair
// The for...of statement creates a loop iterating over iterable objects(under the cover, is calling .next()), including: built-in String, Array, Array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object. In short works with `value` of key:value pair
// The for...of loop and (...) operator, they automatically consume an iterator to completion, meaning they will just keep calling .next() on the iterator until they get out done true

/**
 * Generator
 * - is a state machine & a pull system, refer (http://reactivex.io/rxjs/manual/overview.html#pull-versus-push)
 * - is a function that can be started and stopped as many as you'd like
 * - when calling generators it doesn't actually executes its code / run the way it used to be
 * - what it does is it constructs an iterator and it stays in a paused state and then it says
 *   you can use the iterator to control the generator
 * - can yield out as many values as you want it to
 * - it just gonna wait forever until somebody calls .next again
 * - will return done:true once it gets to the end and does a return
 */

function* main() {
  // generator pauses when it gets yield, yield is also a way to send a value out while the function is running
  yield 10;
  yield 9;
  // return 12;
  yield 12;
}

const it = main();

// next call here is going to return us a iterator result { value: undefined, done: false }
it.next() // ?
it.next() // ?
it.next() // ?
it.next() // ?

// The reason we don't see last value from return 'cause when done is true then it threw away any value that it might have gotten back out
// To show last value is to change return to yield then do next call or for of loop will do the job

