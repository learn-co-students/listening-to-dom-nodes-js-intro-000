
const main = document.getElementById('main')

main.addEventListener('click', function(event){
  alert('I was clicked!!');
});

const input = document.querySelector('input');

input.addEventListener('keydown', function(e) {
  console.log(e.key);
});

const divs = document.querySelectorAll('div')

divs.forEach(element => {
  element.addEventListener('click', function(event){
    console.log(this.firstChild.nodeValue.trim() + ' bubbled')
  },{
    capture: false
  })
})

divs.forEach(element => {
  element.addEventListener('click', function(event){
    console.log(this.firstChild.nodeValue.trim() + ' bubbled')
  }, {
    capture: true
  })
})

divs.forEach(element => {
  element.addEventListener('click', function(event){
    console.log(this.firstChild.nodeValue.trim() + ' bubbled')
    event.stopPropagation()
  }, {
    capture: false
  })
})
