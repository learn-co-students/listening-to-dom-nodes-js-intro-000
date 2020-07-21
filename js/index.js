// using this file is optional

const main = document.getElementById('main');

main.addEventListener('click', function(event) {
  alert('I was clicked!');
});

const input = document.querySelector('input');
input.addEventListener('keydown', function(e) {
  console.log(e.key);
});
