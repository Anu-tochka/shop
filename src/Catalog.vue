'use strict';
<template>
  <div :class="[$style.product-content]"> 
       <CatalogItem v-for="item in items">
    </div>
</template>

<script>
import CatalogItem  from './CatalogItem.vue'

new Vue({
  el: '.product-content',
  data: {
    items = [{ "name": "Coat", "price": 1500, "alt": "photo product", "img": "img/goods1.png" },
            { "name": "Jacket", "price": 1900, "alt": "photo product", "img": "img/goods2.png" },
            { "name": "Hoodie", "price": 1500, "alt": "photo product", "img": "img/goods3.png" },
            { "name": "T-Shirt", "price": 1000, "alt": "photo product", "img": "img/goods4.png" },
            { "name": "Jacket", "price": 5000, "alt": "photo product", "img": "img/goods5.png" },
            { "name": "Polo", "price": 1500, "alt": "photo product", "img": "img/goods6.png" }],
  preloading = false,
  CartInstance = null
  }
})

//export default class List {}
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
