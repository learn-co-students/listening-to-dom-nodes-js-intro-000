// using this file is optional
// you can also load the code snippets in using your browser's console
const main = document.getElementById('main');

main.addEventListener('click', function(event) {
  alert('I was clicked!');
});

 const input=document.querySelector('input');
 input.addEventListener('keydown',function(e){
   console.log(e.key);
 });

const input = document.querySelector('input')
input.addEventListener('keydown', function(e){
  if (e.key==="g"){
    return e.preventDefault()
  }  else {
        console.log(e.key)
      }
    });

let divs=document.querySelectorAll('div');
function bubble(e){
  console.log(this.firstChild.nodeValue.trim()+'bubbled');
  for (let i =0; i < divis.lenght; i++){
    divs[i].addEventListener('click',bubble);
  }
}

const divs=document.querySelectorAll('div');
function bubble(e){
  e.stopPropagation();
  console.log(this.firstChild.nodeValue.trim()+'bubbled');
}
  for (let i =0; i < divis.lenght; i++){
    divs[i].addEventListener('click',bubble);
  }
