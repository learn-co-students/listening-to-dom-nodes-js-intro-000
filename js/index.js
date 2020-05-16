// using this file is optional
// you can also load the code snippets in using your browser's console
const main = document.getElementById('main');

main.addEventListener('click', function(event) {
  alert('I was clicked!');
});

const input = document.querySelector('input');

input.addEventListener('keydown', function(e){
console.log(e.key);
});

const input2 = document.querySelector('input');

input2.addEventListener('keydown', function(h){
  if(h.key === g){
    return h.preventDefault();
  }else{
    console.log(h.key);
  }
})

let divs = document.querySelectorAll('div');

function bubble(e){
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}
for(let i = 0; i < divs.length; i++){
  divs[i].addEventListener('click', bubble);
}
