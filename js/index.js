// using this file is optional
// you can also load the code snippets in using your browser's console
const divs = document.querySelectorAll('div');
 
function bubble(e) {
  // stop! that! propagation!
  e.stopPropagation();
 
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}
 
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}