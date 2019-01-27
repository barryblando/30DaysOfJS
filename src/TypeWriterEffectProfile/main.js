// function TypeWriter(txtElement, words, wait = 3000) {
// We've defined only the properties inside the constructor:
//   this.txtElement = txtElement;
//   this.words = words;
//   this.txt = ''; // characters
//   this.wordIndex = 0; // which word we're on, words are gonna be formatted as an array
//   this.wait = parseInt(wait, 10);
//   this.type();
//   this.isDeleting = false;
// }

// Type Method, defined on the constructor's prototype
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
    this.isTyping = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // LOGIC BEHIND
    // fullTxt = this.words e.g 'fullest'
    // this.txt = 'full'
    // If this.txt.length + 1 = 4, now this.txt value will be fullTxt.substring(0, 4) = 'fulle' and so on, same as subtracting
    // Check if deleting
    if (this.isDeleting) {
      // Remove character by subtracting 1 to current length
      this.txt = fullTxt.substring(0, this.txt.length - 1);
      this.isTyping = true;
      console.log('Sub Character: ', this.txt);
    } else {
      // Add character by adding 1 to current length
      this.txt = fullTxt.substring(0, this.txt.length + 1);
      console.log('Add Character: ', this.txt);
      this.isTyping = true;
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 200;

    if (this.isDeleting) {
      typeSpeed /= 2; // Make deleting fast
    }

    // If not deleting and word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Pause before start deleting
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
      // Set typing to false
      this.isTyping = false;
    } else if (this.isDeleting && this.txt === "") {
      // Pause before start typing
      typeSpeed = 1500;
      this.isDeleting = false;
      this.isTyping = false;
      // Move to next word
      this.wordIndex++;
    }

    let txtCursor = document.querySelector(".txt-cursor");
    txtCursor.classList.remove("blinking-cursor");

    // add blinking cursor if not typing anymore
    if (!this.isTyping) {
      txtCursor.classList.add("blinking-cursor");
    }

    setTimeout(() => this.type(), typeSpeed); // run this method every time
  }
}

class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => this.resolve = resolve);

    this.queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = '';
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }

    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}


// Init App
function init() {
  // Define elements to animate
  const txtElement = document.querySelector(".txt-type");
  const el = document.querySelector('.text');
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  const phrases = [
    'Hi!, I\'m Barry, Web App Developer based in Davao, Philippines',
    'If you have any questions or need workforce...',
    'contact me through this email address: barryblando@gmail.com',
    'Thank You!',
  ];

  // Instantiate TextScramble
  const fx = new TextScramble(el);

  let counter = 0;
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 2000)
    });
    counter = (counter + 1) % phrases.length
  };

  // Init TypeWriter & TextScramble
  setTimeout(() => new TypeWriter(txtElement, words, wait), 4000);
  next();

  // Initial waiting Blinking Cursor
  document.querySelector(".txt-cursor").classList.add("blinking-cursor");
}

// Init on DOM Load
document.addEventListener("DOMContentLoaded", init);
