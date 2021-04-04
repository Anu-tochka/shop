'use strict';
import Vue from 'vue'
import App from 'app.vue'
import Store from '/store/index.js'

new Vue({
  el: '.product-content',
  template: '<App />',
  components: {
    App,
  },
  store,
})