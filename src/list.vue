'use strict';
<template>
  <div :class="[$style.product-content]"> !!!
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
import Cart from './cart'

class List {
  _items = []
  preloading = false;
  _CartInstance = null

  constructor (CartInstance) {
    this._CartInstance = CartInstance
	// Забираем массив со свойствами товаров, на основе которых будем создавать объекты товары
    this.fetchGoods()
  }
  
  fetchGoods () {
    this.preloading = true
	  return fetch('http://localhost:3000/database/data.json')
	  .then( res => {
			return res.json()
		})
		.then( data => {
			this.preloading = false
			let goods = data.data.map(cur => {
			  return new GoodItem(cur, CartInstance)
			})
      
		})
		.then(this.render.bind(this)); /*
			.then(
        this._items = [...goods]
			return this._items */

		/*
		this._items.push(...goods) */

  
   };
	
  render () {
    // В this.items у нас хранятся объекты GoodItem
    // Проходимся по каждому такому объекту и вызываем у него метод рендера (каждая карточка товара рендерит сама себя)
    this._items.forEach(good => {
      good.render()
    })
  }
}

export default class List {}
</script>

<style module>
/* !!! */
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
