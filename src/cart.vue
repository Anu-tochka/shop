'use strict';
<template>
  <div :class="[$style.cart-product]" v-for="item in items"> 
       <CartItem v-for="item in items">
        <div :class="[buttons]">
            <button :class="[$style.shipping__button]">CLEAR SHOPPING CART</button>
            <button :class="[$style.shipping__button]">CONTINUE SHOPPING</button>
        </div></div>
</template>

<script>
import CartItem from 'CartItem.vue'

new Vue({
  el: '.cart-product',
  data: {
    items:  [
      { name: 'MANGO  PEOPLE  T-SHIRT', price: 500, alt: 'photo product', img: "img/card__img.jpg", quantity: 1 },
      { name: 'MANGO  PEOPLE  T-SHIRT', price: 550, alt: 'photo product', img: "card__img.jpg", quantity: 1 },
    ]
  },
  methods: {
    add(CartItemInstance){
      const FoundItem = this._items.find((CartItem) => {
        return CartItem._name === GoodItemInstance._name
      })
      
      if (FoundItem){
        FoundItem.counter++
      } else {
        this._items.push(new cartItem({
          name: GoodItemInstance._name,
          price: GoodItemInstance._price,
          alt: GoodItemInstance._alt,
          img: GoodItemInstance._img,
          quantity: GoodItemInstance._quantity
        }))
      }
    }
	}
})


//export default class Cart {}
</script>

<style module>
.cart-product {
  width: 657px; }

.shipping__button {
    border: 1px solid #EAEAEA;
    color: #4A4A4A;
    padding: 10px 15px 12px;
    font-weight: 300;
    font-size: 11px;
    line-height: 13px;
    margin-top: 24px;
    background-color: #fff;
    transition: all 0.3s; }


</style>
