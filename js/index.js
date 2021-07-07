// using this file is optional
// you can also load the code snippets in using your browser's console
let divs = document.querySelectorAll('div');


function bubble(e) {
console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}
divs = document.querySelectorAll('div');
 
function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');
}
 
for (let i = 0; i < divs.length; i++) {
  // set the third argument to `true`!
  divs[i].addEventListener('click', capture, true);
}
const divs = document.querySelectorAll('div');

function bubble(e) {
     e.stopPropagation();
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}



