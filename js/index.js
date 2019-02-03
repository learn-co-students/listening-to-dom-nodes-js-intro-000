// using this file is optional
// you can also load the code snippets in using your browser's console
const inputs = document.querySelectorAll('input');
      for (i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('mouseover', function(event) {
          inputs[0].style.backgroundColor = 'red';
          inputs[1].style.backgroundColor = 'blue';
        })
        inputs[i].addEventListener('mouseout', function(event) {
          for (i = 0; i < inputs.length; i++) {
            inputs[i].style.backgroundColor = 'white';
          }
        });
          }
