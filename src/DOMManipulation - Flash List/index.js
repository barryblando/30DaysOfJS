// set the last one to be the first one
// :first is a jQuery extension and not part of the CSS Specs.
let last = $('span.flash span:first');
let z = 1; // Starting point

window.setInterval(function() {
  let el = last; // get the last/previous element
  let next = el.next(); // next sibling

  console.log(next.length);
  // if next.length not exist then set it to be the first one
  // INFO: if we wouldn't do this it will stop at the last sibling
  if(!next.length) next = $('span.flash span:first');

  next.css('z-index', z); // add index
  z++; // increase index
  last = next; // set last state to next
}, 800);
