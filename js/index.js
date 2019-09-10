// using this file is optional
// you can also load the code snippets in using your browser's console
let main = document.getElementById('main');

main.addEventListener('click', function(event) {
  alert('I was clicked!');
});

const input = document.querySelector('input');
input.addEventListener('keydown', function(e){
  if (e.key === 'g') {
    return e.preventDefault();
  } else {
  console.log(e.key)
}
});

let divs = document.querySelectorAll('div');

function bubble(e) {
  e.stopPropagation();
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

function capture(e){
  console.log(this.firstChild.nodeValue.trim() + ' captured');
}

for (let i = 0; i < divs.length; i++) {

  divs[i].addEventListener('click', bubble);
}
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', capture, true);
}
