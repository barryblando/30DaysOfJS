async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Wait until promise is resolved in fetch call
  const data = await response.json(); // Only proceed once promise is resolved
  return data; // Only proceed once second promise is resolved
}

getUsers().then(users => console.log(users));
