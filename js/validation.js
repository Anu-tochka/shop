'use strict';
const jsform = document.getElementById('js__form');
const jsbutton = document.getElementById('js__button');
let inputs = jsform.querySelectorAll('input');
jsbutton.addEventListener('click', function(event) {
	asErr(input);
});
     
function asErr(inputs) {
	inputs.forEach(function(input) {
        if (input.value == '') {
			input.style.borderColor = 'red';
		}
	})
}   

