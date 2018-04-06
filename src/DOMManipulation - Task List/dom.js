// let val;

// val = document;

// console.log(val);

// INFO: getElementById()

// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// change content

// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>'

// INFO: querySelector()

// console.log(document.querySelector('#task-title')); // ID
// console.log(document.querySelector('.card-title')); // Class
// console.log(document.querySelector('h5')); // tag element

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue'; // descendant

// document.querySelector('li:last-child').style.color = 'red'; // pseudo classes
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';

// INFO: getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red'
// items[3].textContent = 'Hello';

// more specific selection
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

// INFO: getElementsByTagName

// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red'
// lis[3].textContent = 'Hello';

// Convert HTML Collection into array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach((li, index) => {
//   console.log(`${li.className}`)
//   li.textContent = `${index}: Hello`
// });

// console.log(lis);

// INFO: querySelectorAll() - NodeList

// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach((item, index) => {
//   item.textContent = `${index}: Hello`
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach((li, index) => {
//   li.style.background = '#ccc';
// });

// for(let i = 0; i < liEven.length; i++) {
//   liEven[i].style.background = '#f4f4f4';
// }

// console.log(items);

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get Child Nodes
val = list.childNodes;
val = list.childNodes[1];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// NOTE: Node Type
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element nodes - HTML Collection
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';

// Children of children
val = list.children[3].children;
val = list.children[3].children[0];
list.children[3].children[0].id = 'test-link';

// First Child
val = list.firstChild;
val = list.firstElementChild;

// Last Child
val = list.lastChild;
val = list.lastElementChild;

// count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;

// Parent of parent
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;

// Get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);

// CreateTextNode and textContent

/*
  It 's not really matter of advantage but of proper usage depending on the need.

  The fundamental difference is that:

  - createTextNode() is a method and works just as its name says: it creates an element...
    then you must do something with it (where you append a child);
    so it is useful if you want to have a new element and place it somewhere:

    var my_text = document.createTextNode('Hello!');
    span.appendChild(my_text);

    then it will end with: <span>Original textHello!</span>, because you appended your textNode.

  - textContent is a property you may get or set, with a unique statement and nothing else;
    so it is useful when you only want to change the content of an already existing element
    Now in the precise case of your question, you said you want to change the text of the element...
    To be more clear say you have the following HTML element: <span>Original text</span>
*/