const main = document.getElementById('main');

main.addEventListener('click', function(event) {
  alert('I was clicked!');
});

const input = document.querySelector('input');

input.addEventListener('keydown', function(e) {
  if (e.which ===71) {
    return e.preventDefault()
  } else{
  console.log(e.which);
  }
});

//Section; Explain the difference between bubbling and capturing events
let divs = document.querySelectorAll('div');

function bubble(e) {
  console.log(this.firstChild.nodeValue.trim() + ' bubbled')
}
