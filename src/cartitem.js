'use strict';

class CartItem {
  _name = ''
  _price = 0
  _alt = ''
  _img = 'img/goods1.png'
  _quantity = 1

  // в аргументах применена деструктуризация
  constructor ({ name, price, alt, img, quantity }) {
    this._name = name
    this._price = price
    this._alt = alt
    this._img = img
    this._quantity = quantity
  }
  
  render () {
    // находим место куда рендерить
    const placeToRender = document.querySelector('.cart-product')
    if (placeToRender) {
      // создаем блок, в который помещаем информацию о товаре
      const block = document.createElement('div')
	  block.classList.add('card')
	  block.classList.add('card_mb')
      block.innerHTML = `<img class="card__img" src="${this._img}" alt="${this._alt}">
                <div class="card__content">
                    <h3 class="card__heading">${this._name}</h3>
                    <p class="card__text">Price: $${this._price}</p>
                    <p class="card__text">Color: Red</p>
                    <p class="card__text">Size: Xl	</p>
                    <p class="card__text">Quantity:	<input type="number" min="1" max="5" value="${this._quantity}"></p>
                </div>`

      // помещаем созданный блок на страницу
      placeToRender.appendChild(block)
    }
  }
}

export default class CartItem {}