async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Wait until promise is resolved in fetch call
  const data = await response.json(); // Only proceed once promise is resolved
  return data; // Only proceed once second promise is resolved
}

getUsers().then(users => console.log(users));


// Waiting on Multiple Promises
async function go() {
  const p1 = fetch('https://api.github.com/users/wesbos');
  const p2 = fetch('https://api.github.com/users/barryblando');
  // Wait for both of them to come back
  // if p1 takes a second but p2 takes 10 seconds, the whole thing is gonna take 10 seconds altogether
  const res = await Promise.all([p1, p2]);
  const dataPromises = res.map(r => r.json()); // Two extra promises which is turning it into json, await it
  const [wes, bar] = await Promise.all(dataPromises);
  console.log(wes, bar);
}

go();

// for each data
async function getData(names) {
  const promises = names.map(name => fetch(`https://api.github.com/users/${name}`).then(r => r.json()));
  const people = await Promise.all(promises);
  // if cared for the quickest one to comeback in some cases, where picking multiple URLs
  // you can use Promise.race(), will resolve as soon as the first promise of the array
  console.log(people);
}

getData(['wesbos', 'barryblando', 'darcyclarke']);