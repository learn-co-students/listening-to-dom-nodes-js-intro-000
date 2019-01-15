// using this file is optional
// you can also load the code snippets in using your browser's console

console.log(`********* index.js`);

const elmMain = document.getElementById('main');

elmMain.addEventListener('click', function(event) {
  alert(`click`);
});

const elmInput = document.querySelector('input');

elmInput.addEventListener('keydown', function(event) {
  if (event.key === 'g') {
    return event.preventDefault();  
  }
  else {
    console.log(event.key);
  }
});

const elmlDivs = document.getElementsByTagName('div');

function funcOnClickBubble(event) {
  if (this.firstChild.nodeValue.trim() === '2') {    // do not let event triggered in No1 div
    event.stopPropagation();
  }
  console.log(`${this.firstChild.nodeValue.trim()} - event bubbled!`);
  // return event.preventDefault();
}

function funcOnClickCapture(event) {
  console.log(`${this.firstChild.nodeValue.trim()} - event captured!`)
}

for (let i=0; i<elmlDivs.length; i++) {
  elmlDivs[i].addEventListener('click', funcOnClickBubble);
  elmlDivs[i].addEventListener('click', funcOnClickCapture, true);
}