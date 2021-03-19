'use strict';
<template>
  <div :class="[$style.card] [$style.card_mb]">
       <img  :class="[card__img]" src="{{img}}" alt="{{alt}}">
                <div  :class="[card__content]">
                    <h3  :class="[card__heading]">{{name}}</h3>
                    <p  :class="[card__text]">Price: ${{price}}</p>
                    <p  :class="[card__text]">Color: Red</p>
                    <p  :class="[card__text]">Size: Xl	</p>
                    <p  :class="[card__text]">Quantity:	<input type="number" min="1" max="5" value="{{quantity}}"></p>
                </div>
    </div>
</template>

<script>

new Vue({
  el: '.card',
  data: {
    name: 'Coat',
    price: 1500,
    alt: 'photo product',
    img: 'img/goods1.png',
    quantity: 1
  },
  export default {
  props: {
    name: String,
    price: Number,
    alt: String,
    img: String,
    quantity: Number
  }
}
})
 

</script>

<style module>
.card {
  display: flex;
  background-color: #fff;
  filter: drop-shadow(17px 19px 24px rgba(0, 0, 0, 0.13)); }
  .card_mb {
    margin-bottom: 40px; }
  .card__heading {
    font-size: 24px;
    line-height: 29px;
    color: #222222;
    width: 262px; }
  .card__content {
    padding: 22px 22px 31px 31px; }

</style>
