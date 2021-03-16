'use strict';

class Button {
    _place = '.buttons';
    _kontent = 'Добавить ещё';
	this.render()
	
  constructor (place, tag, kontent) {
    this._place = place
	this._kontent = kontent
	}

	onBtnClick() {
	}

	getTemplate{
		const btn = document.createElement('button')
		btn.classList.add("shipping__button");
		return btn
	}

    render() {
		const placeToRender = document.querySelector(this._place)
		if (placeToRender) {
			let btn = this.getTemplate();
			btn.innerHTML = this._kontent;
			placeToRender.appendChild(btn)
		}
		this._items.forEach(CartItemInstance => {
		  CartItemInstance.render()
		})
	
		
		btn.addEventListener('click', () => {
			this.onBtnClick()
		})
	}
	

  /*
  cartItem () {
    return [
      { name: 'MANGO  PEOPLE  T-SHIRT', price: 500, alt: 'photo product', img: "img/card__img.jpg", quantity: 1 },
      { name: 'MANGO  PEOPLE  T-SHIRT', price: 550, alt: 'photo product', img: "card__img.jpg", quantity: 1 },
    ]
  }
*/
}

ButtonInstance = New Button {}