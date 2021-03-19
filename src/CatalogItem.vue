'use strict';
<template>
  <div :class="[$style.product] [$style.product_mb]">
     <a href="product.html">
         <img :class="[product__img]" src="{{img}}" alt="{{alt}}">
    </a>
                <a :class="[product__add]" href="#">
                    <img src="img/product-cart.svg" alt="cart"> Add to Cart
                </a>
                <div :class="[$style.product__info]">
                    <a :class="[$style.product__name]" href="product.html">{{name}}</a>
                    <p :class="[$style.product__text]">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                    <div  :class="[product__price]">${{price}}</div>
                </div>
    </div>
</template>

<script>

import CatalogItem  from './CatalogItem.vue'

new Vue({
  el: '.product-content',
  data: {
    name: 'Coat',
    price: 1500,
    alt: 'photo product',
    img: 'img/goods1.png',
    CartInstance = null
  }
})

//export default class GoodItem {}
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
