'use strict';
import Cart from './cart'

class List {
  _items = []
  preloading = false;
  _CartInstance = null

  constructor (CartInstance) {
    this._CartInstance = CartInstance
    let goods =  this.fetchGoods() 
    this._items =  goods
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
			this._items = [...goods]
			return this._items
		})
		

		/*
		this._items.push(...goods) */

		// запускаем рендер
		.then(this.render.bind(this));

  
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