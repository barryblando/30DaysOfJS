const user = { email: 'barryblando@gmail.com' };

try {
  // Produce a ReferenceError
  // myFunction();

  // Produce a TypeError
  // null.myFunction();

  // Produce syntax error
  // eval('Hello World');
  // console.log(eval('2+2')); // evaluate js in a string

  // Produce URI error
  // decodeURIComponent('%');

  if (!user.name) {
    // throw 'User has no name';
    throw new SyntaxError('User has No Name');
  }
} catch(e) {
  console.log(`User Error: ${e.message}`);
  console.log(e);
  console.log(e.message);
  console.log(e.name);
  console.log(e instanceof ReferenceError);
  console.log(e instanceof TypeError);
} finally {
  console.log('Finally runs regardless of result...')
}