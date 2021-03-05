'use strict';

class List {
  _items = []
  preloading = false;

  constructor (CartInstance) {
    // Забираем массив со свойствами товаров, на основе которых будем создавать объекты товароы
    this.fetchGoods()
		.then( res => {
			return res.json()
		})
		.then( data => {
			this.preloading = false
			const goods = data.data.map(cur => {
			  return new GoodItem(cur, CartInstance)
			})
			this._items = [...goods]
			return this._items
		})
		goods = goods.map(cur => {
		  return new GoodItem(cur)
		})

		/*
		this._items.push(...goods) */

		// запускаем рендер
		.then(this.render.bind(this));
  }

  /**
   * Заглушка - имитатор запроса на сервер
   * Возвращает свойства, на основании которых будут создаваться объекты
   **/ 
  fetchGoods () {
    this.preloading = true
	return fetch('http://localhost:3000/database/data.json')
   };
	
  render () {
    // В this.items у нас хранятся объекты GoodItem
    // Проходимся по каждому такому объекту и вызываем у него метод рендера (каждая карточка товара рендерит сама себя)
    this._items.forEach(good => {
      good.render()
    })
  }
}

class GoodItem {
  _name = ''
  _price = 0
  _alt = ''
  _img = 'img/goods1.png'
  _CartInstance = null

  // в аргументах применена деструктуризация
  constructor ({ name, price, alt, img }, CartInstance) {
    this._name = name
    this._price = price
    this._alt = alt
    this._img = img
	this._CartInstance = CartInstance
  }
  
  addToCart () {
	this._CartInstance.add(this)  
  }
  
  render () {
    // находим место куда рендерить
    const placeToRender = document.querySelector('.product-content')
    if (placeToRender) {
      // создаем блок, в который помещаем информацию о товаре
      const block = document.createElement('div')
	  block.classList.add('product')
	  block.classList.add('product_mb')
      block.innerHTML = `<a href="product.html">
                    <img class="product__img" src="${this._img}" alt="${this._alt}">
                </a>
                <a class="product__add" href="#">
                    <img src="img/product-cart.svg" alt="cart"> Add to Cart
                </a>
                <div class="product__info">
                    <a href="product.html" class="product__name"> ${this._name} </a>
                    <p class="product__text">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                    <div class="product__price">$${this._price}</div>
                </div>`

      // помещаем созданный блок на страницу
      placeToRender.appendChild(block)
    }
  }
}

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
			  quantity: GoodItemInstance._quantity,
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

class CartItem {
  _name = ''
  _price = 0
  _alt = ''
  _img = 'img/goods1.png'
  _quantity = 1

  // в аргументах применена деструктуризация
  constructor ({ name, price, alt, img, quantity }) {
    this._name = name
    this._price = price
    this._alt = alt
    this._img = img
    this._quantity = quantity
  }
  
  render () {
    // находим место куда рендерить
    const placeToRender = document.querySelector('.cart-product')
    if (placeToRender) {
      // создаем блок, в который помещаем информацию о товаре
      const block = document.createElement('div')
	  block.classList.add('card')
	  block.classList.add('card_mb')
      block.innerHTML = `<img class="card__img" src="${this._img}" alt="${this._alt}">
                <div class="card__content">
                    <h3 class="card__heading">${this._name}</h3>
                    <p class="card__text">Price: $${this._price}</p>
                    <p class="card__text">Color: Red</p>
                    <p class="card__text">Size: Xl	</p>
                    <p class="card__text">Quantity:	<input type="number" min="1" max="5" value="${this._quantity}"></p>
                </div>`

      // помещаем созданный блок на страницу
      placeToRender.appendChild(block)
    }
  }
}
const CartInstance = new Cart()
new List(CartInstance)
//const ListInstance = new List()

