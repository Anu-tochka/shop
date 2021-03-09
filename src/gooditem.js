'use strict';

class GoodItem {
  _name = ''
  _price = 0
  _alt = ''
  _img = 'img/goods1.png'
  _CartInstance = null

  // в аргументах применена деструктуризация
  constructor ({ name, price, alt, img }, CartInstance) {
    this._name = name
    this._price = price
    this._alt = alt
    this._img = img
	this._CartInstance = CartInstance
  }
  
  addToCart () {
	this._CartInstance.add(this)  
  }
  
  render () {
    // находим место куда рендерить
    const placeToRender = document.querySelector('.product-content')
    if (placeToRender) {
      // создаем блок, в который помещаем информацию о товаре
      const block = document.createElement('div')
	  block.classList.add('product')
	  block.classList.add('product_mb')
      block.innerHTML = `<a href="product.html">
                    <img class="product__img" src="${this._img}" alt="${this._alt}">
                </a>
                <a class="product__add" href="#">
                    <img src="img/product-cart.svg" alt="cart"> Add to Cart
                </a>
                <div class="product__info">
                    <a href="product.html" class="product__name"> ${this._name} </a>
                    <p class="product__text">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                    <div class="product__price">$${this._price}</div>
                </div>`

      // помещаем созданный блок на страницу
      placeToRender.appendChild(block)
    }
  }
}


export default class GoodItem {}