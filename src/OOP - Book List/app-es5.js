// Book Constructor - Handles creating book object
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor - Set of prototype methods handle UIs
function UI() { }

// Add Book to List
UI.prototype.addBookToList = function(book) {
  const list = document.getElementById('book-list');

  // Create table row el
  const row = document.createElement('tr');

  // Insert cols
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td>
  `;

  // Append to list
  list.appendChild(row);
}

// Show Alert
UI.prototype.showAlert = function(message, className) {
  // Create div
  const div = document.createElement('div');
  // Add class
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector('.container');
  // Get form
  const form = document.querySelector('#book-form');
  // Insert Alert
  container.insertBefore(div, form);
  // Timeout after 3s
  setTimeout(function()  {
    document.querySelector('.alert').remove();
  }, 3000);
}

// Delete Book
UI.prototype.deleteBook = function(target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
}

// Clear Fields
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

function Store() { }

Store.prototype.getBooks = function() {
  let books;
  // if it's not there
  if (localStorage.getItem('books') === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }

  return books;
}

Store.prototype.displayBooks = function() {
  const store = new Store();
  const books = store.getBooks();
    books.forEach(function(book) {
    const ui = new UI;

    // add book to UI
    ui.addBookToList(book);
  });
}

Store.prototype.addBook = function(book) {
  const store = new Store();
  const books = store.getBooks();
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
}

Store.prototype.removeBook = function(isbn) {
  const store = new Store();
  const books = store.getBooks();
  books.forEach(function(book, index) {
    if(book.isbn === isbn) {
      books.splice(index, 1);
    }
  });

  localStorage.setItem('books', JSON.stringify(books));
}

// Event Listener for add book
document.getElementById('book-form').addEventListener('submit', function(e) {
  // Get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  // Instantiate Book
  const book = new Book(title, author, isbn);

  // Instantiate UI & Store
  const ui = new UI();
  const store = new Store();

  // Validate
  if (title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error')
  } else {
    // Add book to list & LocalStorage
    ui.addBookToList(book);
    store.addBook(book)

    // Show success
    ui.showAlert('Book Added!', 'success');

    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// Event listener for delete book
document.getElementById('book-list').addEventListener('click', function(e){
  // Instantiate UI & Store
  const ui = new UI();
  const store = new Store();

  // Delete from bookList & LocalStorage (using ISBN)
  ui.deleteBook(e.target);
  store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show alert
  ui.showAlert('Book  Removed!', 'success');

  e.preventDefault();
});