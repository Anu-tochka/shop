'use strict';
const jsform = document.getElementById('js__form');
const jsbutton = document.getElementById('js__button');
const jsname = document.getElementById('name');
const jsphone = document.getElementById('phone');
const jsemail = document.getElementById('email');
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
	if (!jsname.value.test('/\D+/')) {
		jsname.style.borderColor = 'red';
	}
	if (!jsphone.value.test('//+7/(\d{3}/d{3}-d{4})/')) {
		jsphone.style.borderColor = 'red';
	}
}   

