const main = document.getElementById('main');
 
main.addEventListener('click', function(event) {
  alert('I was clicked!');
});

const mouse = document.createElement('div')

main.appendChild('mouse')

main.appendChild(mouse)

mouse.innerHTML = 'Move over me'

mouse.addEventListener('mouseover', function(event) {
alert('mouse moved over me!!!')
})

mouse.remove()

const input = document.querySelector('input');
 
input.addEventListener('keydown', function(e) {
  console.log(e.key);
});


const input = document.querySelector('input')
 
input.addEventListener('keydown', function(e) {
  if (e.key === "g") {
    return e.preventDefault()
  } else {
    console.log(e.key)
  }
});

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