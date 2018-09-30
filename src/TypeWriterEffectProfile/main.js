// function TypeWriter(txtElement, words, wait = 3000) {
//   this.txtElement = txtElement;
//   this.words = words;
//   this.txt = ''; // characters
//   this.wordIndex = 0; // which word we're on, words are gonna be formatted as an array
//   this.wait = parseInt(wait, 10);
//   this.type();
//   this.isDeleting = false;
// }

// Type Method
// TypeWriter.prototype.type = function type() {
// Current index of word
//   const current = this.wordIndex % this.words.length;
// Get full text of current word
//   const fullTxt = this.words[current];

// Check if deleting
//   if (this.isDeleting) {
// Remove character
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
// Remove waiting blinking cursor
// document.querySelector('.txt-cursor').classList.remove('blinking-cursor');
//   } else {
// Add character
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }

// Insert txt into element
//   this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

// Initial Type Speed
//   let typeSpeed = 300;

//   if (this.isDeleting) {
//     typeSpeed /= 2;  // Make deleting fast
//   }

// If not deleting and word is complete
//   if (!this.isDeleting && this.txt === fullTxt) {
// Make a pause at end
//     typeSpeed = this.wait;
// Add waiting Blinking Cursor
//     document.querySelector('.txt-cursor').classList.add('blinking-cursor');
// Set delete to true
//     this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === '') {
//     this.isDeleting = false;
// Move to next word
//     this.wordIndex++;
// Pause before start typing
//     typeSpeed = 500;
//   }

//   setTimeout(() => this.type(), typeSpeed); // run this method every time
// };

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = ""; // characters
    this.wordIndex = 0; // which word we're on, words are gonna be formatted as an array
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove character by subtracting 1 to current length
      this.txt = fullTxt.substring(0, this.txt.length - 1);
      console.log('Sub Character: ', this.txt);
      // Remove waiting blinking cursor
      // document.querySelector('.txt-cursor').classList.remove('blinking-cursor');
    } else {
      // Add character by adding 1 to current length
      this.txt = fullTxt.substring(0, this.txt.length + 1);
      console.log('Add Character: ', this.txt);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2; // Make deleting fast
    }

    // If not deleting and word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make a pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 1000;
    }

    setTimeout(() => this.type(), typeSpeed); // run this method every time
  }
}

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  // Init TypeWriter constructor
  setTimeout(() => new TypeWriter(txtElement, words, wait), 4000);

  // Add waiting Blinking Cursor
  document.querySelector(".txt-cursor").classList.add("blinking-cursor");
}

// Init on DOM Load
document.addEventListener("DOMContentLoaded", init);
