'use strict';
const textAdd = 'Товар добавлен в корзину';

document.addEventListener('DOMContentLoaded', function() {
        let add = document.querySelectorAll('.product__add');
		add.forEach(function(item) {
			item.addEventListener('click', clickHandler);
		});
    });

/**
 * Обработчик клика 
 * @param {MouseEvent} event 
 */
function clickHandler(event) {
    alert(textAdd);
}

