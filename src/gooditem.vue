'use strict';
<template>
  <div :class="[$style.product-content]">
  <div :class="[$style.product] [$style.product_mb]">
       <img class="card__img" src="${this._img}" alt="${this._alt}">
                <div class="card__content">
                    <h3 class="card__heading">${this._name}</h3>
                    <p class="card__text">Price: $${this._price}</p>
                    <p class="card__text">Color: Red</p>
                    <p class="card__text">Size: Xl	</p>
                    <p class="card__text">Quantity:	<input type="number" min="1" max="5" value="${this._quantity}"></p>
                </div>
    </div>
</template>

<script>
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
</script>

<style module>
.product {
  width: 360px;
  background: #F8F8F8;
  position: relative;
  transition: all 0.3s; }
  .product:hover .product__img {
    filter: brightness(50%); }
  .product:hover .product__add {
    display: flex; }
  .product_mb {
    margin-bottom: 30px; }
  .product__img {
    width: 100%; }
  .product-content {
    padding-top: 48px;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between; }
  .product__info {
    padding: 24px 16px 20px; }
  .product__text {
    margin-top: 12px;
    margin-bottom: 18px; }
  .product__add {
    position: absolute;
    top: 188px;
    left: 111px;
    width: 139px;
    height: 44px;
    border: 1px solid white;
    align-items: center;
    justify-content: center;
    display: none;
    transition: all 0.3s; }
  .product__add:hover {
    box-shadow: 0 0 5px #fff; }

</style>
