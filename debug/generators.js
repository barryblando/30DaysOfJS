// Generator
// Returns something that is yield one at a time using .next()

function ajax(url) {
  /* eslint-disable */
  // gonna fetch url, when the data comes back, we're going to call next,
  // Whatever we pass from next will go back to the generator and get stored to initial variable (e.g beers, wes, fatJoe)
  fetch(url).then(data => data.json()).then(data => dataGen.next(data));
  /* eslint-enable */
}

function* steps() {
  console.log('fetching beers');
  const beers = yield ajax('http://api.react.beer/v2/search?q=hops&type=beer');
  // So first data that has been pass from next will be put back to variable beer, let's console.log it
  console.log(beers);

  // next called to second request (if something's wrong to the first data this will not run)
  console.log('fetching wes');
  const wes = yield ajax('https://api.github.com/users/'); // ajax('https://api.github.com/users/' + beers[0]); you can put beers for next fetch
  console.log(wes);

  console.log('fetching fat joe');
  const fatJoe = yield ajax('https://api.discogs.com/artists/51988');
  console.log(fatJoe);
}

const dataGen = steps();
dataGen.next(); // kick it off / Invoke
