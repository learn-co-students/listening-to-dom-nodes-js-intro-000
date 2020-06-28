// using this file is optional
// you can also load the code snippets in using your browser's console
console.log('JavaScript is loaded');

//Flashing an alert when Main is clicked on
const main = document.querySelector('#main');
main.addEventListener('click', (event) => {
  alert('I was clicked');
});

//Capturing the user input in input text field
const input = document.querySelector('input');
input.addEventListener('keydown', (e) => {
  if(e.key == 'k' || e.key == 'r' || e.key == 'i' || e.key == 'n') {
    return e.preventDefault();
  } else {
    console.log(e.key);
  }
});

//bubbling of events
let divs = document.querySelectorAll('div');
function bubble(e) {
  e.stopPropagation();
  console.log(this.firstChild.nodeValue.trim() + ' Bubbled');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click',bubble)
}

//capturing of events
function capture(e) {

  console.log(this.firstChild.nodeValue.trim() + ' captured');
}

for (let i = 0; i < divs.length; i++) {
  // set the third argument to `true`!
  divs[i].addEventListener('click', capture, true);
}
