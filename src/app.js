'use strict';
import Vue from 'vue'
import App from 'app.vue'
/*
const CartInstance = new Cart()
new List(CartInstance)
//const ListInstance = new List()
*/
new Vue({
  el: '.product-content',
  template: '<GoodItem />',
  components: {
    GoodItem,
  },
  data: {
    message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
  }
})