// const user = { email: 'barryblando@gmail.com' };

// try {
  // Produce a ReferenceError
  // myFunction();

  // Produce a TypeError
  // null.myFunction();

  // Produce syntax error
  // eval('Hello World');
  // console.log(eval('2+2')); // evaluate js in a string

  // Produce URI error
  // decodeURIComponent('%');

//   if (!user.name) {
     // throw 'User has no name';
//     throw new SyntaxError('User has No Name');
//   }
// } catch(e) {
//   console.log(`User Error: ${e.message}`);
//   console.log(e);
//   console.log(e.message);
//   console.log(e.name);
//   console.log(e instanceof ReferenceError);
//   console.log(e instanceof TypeError);
// } finally {
//   console.log('Finally runs regardless of result...')
// }

// Catching Async Await Error using Error Handler Factory (High Order Function) DRY code
// </reference https://codeburst.io/async-await-saves-the-day-sort-of-738e6b1cde64

function breathe(amount) {
  return new Promise((resolve, reject) => {
    if(amount < 500) {
      reject('Ohh Noo! Too Low!')
    }
    setTimeout(() => resolve(`Done for ${amount} ms`), amount);
  });
}

function catchErrors(fn) {
  // using rest to capture all the parameters into an array
  return function(...params) {
    // using spread to all those parameters immediately back into the function
    return fn(...params).catch((err) => { // go returns promise so you can always just tack on a .catch on the end
      console.error('Ohh Nooo!!!!');
      console.error(err);
    });
  }
}

async function go(name, last) {
  console.log(`Starting for ${name} ${last}!!!`);
  const res = await breathe(1000);
  console.log(res);
  const res2 = await breathe(300);
  console.log(res2);
  const res3 = await breathe(750);
  console.log(res3);
  const res4 = await breathe(900);
  console.log(res4);
}

// Function Currying - </reference https://javascript.info/currying-partials
const wrappedFunction = catchErrors(go);
wrappedFunction('Barry', 'Blando')