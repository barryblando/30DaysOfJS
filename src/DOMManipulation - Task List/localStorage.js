// Set local storage item when windows is close data will still remain
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// Set session storage item when windows is close date will be erased
// sessionStorage.setItem('name', 'John');

// Remove from local storage
// localStorage.removeItem('name');

// Get from local storage
// const name = localStorage.getItem('name');
// console.log(name);

// Clear local storage
// localStorage.clear();

document.querySelector('form').addEventListener('submit', function(e) {
  const task = document.getElementById('task').value;
  // localStorage only accept one key:value so turn value into array

  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    // parse into array
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  // stringify the array and set
  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved!');

  e.preventDefault(); // prevent default behavior
});

// storage must have data first to prevent return null error
const tasks = JSON.parse(localStorage.getItem('tasks'));

Array.from(tasks).forEach(function(task) {
  return task !== null ? console.log(task) : 'Not Found';
});