'use strict';
import GoodItem from './gooditem'
import CartItem from './cartitem'

class Cart {
    _items = [/* CartItem */]
	
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
		
		this.render()
	//	this._items
	}
/*
  constructor () {
    // Забираем массив выбраннх товаров
    let goods = this.cartGoods()

    // трансформируем наш массив со свойствами в массив с объектами
    goods = goods.map(cur => {
      return new CartItem(cur)
    })
*/
    render() {
		const placeToRender = document.querySelector('.cart-product')
		if (placeToRender) {
			placeToRender.innerHTML = ''
		}
		this._items.forEach(CartItemInstance => {
		  CartItemInstance.render()
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

export default class Cart {}