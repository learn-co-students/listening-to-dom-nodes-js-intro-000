// using this file is optional
// you can also load the code snippets in using your browser's console
const divs = document.querySelectorAll('div');
undefined
function bubble(e) {
    e.stopPropagation();
    console.log(this.firstChild.nodeValue.trim() + 'bubbled');
}
undefined
for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', bubble);
}
undefined
VM1758:3 2bubbled
VM1758:3 4bubbled
VM1758:3 5bubbled