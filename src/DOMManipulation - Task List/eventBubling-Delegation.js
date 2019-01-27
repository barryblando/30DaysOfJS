// EVENT BUBBLING - When we click an element it will bubble up until it's parent's parent.

// document.querySelector('.card-title').addEventListener('click', function() {
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function() {
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function() {
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function() {
//   console.log('col');
// });

// EVENT DELEGATION - simple term is putting listener to parent what you are looking for and put condition using e.target and do functionality
// - refers to the process of using event propagation (bubbling) to handle events at a higher level in the DOM than the element on which the event originated. It allows us to attach a single event listener for elements that exist now or in the future. Inside the Event Handling Function.

// https://javascript.info/event-delegation

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  } else {
    console.log('Not found');
  }
}