// using this file is optional
// you can also load the code snippets in using your browser's console
const main = document.getElementById('main');

main.addEventListener('click', function(event) {
  main.style.color = 'black'
});
const input = document.querySelector('input');

input.addEventListener('keydown', function(e) {
  main.innerHTML = '<p>' + input.value.toString() + '</p>';
});
const input = document.querySelector('input')

input.addEventListener('keydown', function(e) {
  if (e.key === "f") {
    return e.preventDefault()
  } else {
    var title = document.createElement('h2');
    title.innerHTML = input.value.toString();
    main.appendChild(title);
  }
});
let divs = document.querySelectorAll('div');

function bubble(e) {

  console.log(this.firstChild.nodeValue.trim() + ' Booomm');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}
divs = document.querySelectorAll('div');

function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + 'it\'s OK');
}

for (let i = 0; i < divs.length; i++) {
  // set the third argument to `true`!
  divs[i].addEventListener('click', capture, true);
}
const divs = document.querySelectorAll('div');

function bubble(e) {
  // stop! that! propagation!
  e.stopPropagation();

  console.log(this.firstChild.nodeValue.trim() + ' boommm');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}
