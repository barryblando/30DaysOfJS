// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  // DOM load event, Get task from localStorage
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event, when you press Enter it will add
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear task event
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks
  filter.addEventListener('keyup', filterTasks);
}

function getTasks() {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task) {
    const li = document.createElement('li');
    const link = document.createElement('a');

    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(task));
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>'
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);
  });
}

function addTask(e) {
  // console.log(e);
  // Create elements
  const li = document.createElement('li');
  const link = document.createElement('a');

  if (taskInput.value === '') { alert('Add a task'); }

  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>'
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Store in localStorage
  storeTaskInLocalStorage(taskInput.value);

  // Clear input
  taskInput.value = '';

  // Now some JavaScript — here we implement a very simple check inside an onsubmit event handler (the submit event is fired on a form when it is submitted) that tests whether the text fields are empty. If they are, we call the preventDefault() function on the event object — which stops the form submission — and then display an error message in the paragraph below our form to tell the user what's wrong.
  e.preventDefault(); // prevent default behavior
}

function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Here you can see that we are including an event object, e, in the function, and in the function removing task on e.target — which is the element itself. The target property of the event object is always a reference to the element that the event has just occurred upon.
function removeTask(e) {
  console.log(e);
  console.log(e.target)
  // clicked i > a contains .delete-item? > li remove
  if(e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you Sure?')) {
      // remove
      e.target.parentElement.parentElement.remove();

      // remove from localStorage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  } else {
    console.log('Not found');
  }
}

function removeTaskFromLocalStorage(taskItem) {
  // console.log(taskItem); li
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index) {
    if (taskItem.textContent === task) {
      // start from index delete only one
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasks() {
  // taskList.innerHTML = '';
  // Using while loop - Faster <reference https://jsperf.com/innerhtml-vs-removechild
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // Clear from localStorage
  clearTaskFromLocalStorage();
}

function clearTaskFromLocalStorage() {
  localStorage.clear();
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase(); // capture input value
  // Gather all li Elements with .collection-item
  const collectionList = document.querySelectorAll('.collection-item');
  // Loop through the list
  collectionList.forEach(function(task) {
    // console.log(task);
    const item = task.firstChild.textContent;
    // if item match and not equal to -1
    if(item.toLowerCase().indexOf(text) != -1) {
      // display
      task.style.display = 'block';
    } else {
      // -1 means not present, hide other task
      task.style.display = 'none';
    }
  });

}