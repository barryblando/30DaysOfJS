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

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  } else {
    console.log('Not found');
  }
}