'use strict';
<template>
    <button :class="[$shipping__button]" @click="$emit('clicked')"> 
       
    </button>
</template>

<script>

export default {}
</script>

<style module>

.shipping__button {
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


class Button {
    _place = '.buttons';
    _kontent = '';
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