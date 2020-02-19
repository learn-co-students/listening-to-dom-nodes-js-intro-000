// alert user when it clicks on main
const main = document.getElementById('main');

main.addEventListener('click', function (event) {
  alert ('I was clicked')
})

// log the given key when the user hits it
const input = document.querySelector('input');

input.addEventListener('keydown', function (e) {
  console.log(e.key);
})

// prevents users from hitting key 'a'
const input = document.querySelector('input')

input.addEventListener('keydown', function(e) {
  if (e.key === "a") {
    return e.preventDefault()
  } else {
    console.log(e.key)
  }
});

// logs nodevalue + bubbled for target nodes and parent nodes as it triggers them from bottom to top
let divs = document.querySelectorAll('div');

function bubble(e) {

  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}

// logs value + captured for the parent node and children nodes as it triggers them top to bottom
divs = document.querySelectorAll('div');

function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');
}

for (let i = 0; i < divs.length; i++) {

  divs[i].addEventListener('click', capture, true);
}

// logs value + bubbled only for the first child because propagation is stopped
const divs = document.querySelectorAll('div');

function bubble(e) {

  e.stopPropagation();

  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}
