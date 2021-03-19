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
  template: '<App />',
  components: {
    App,
  },
  
})