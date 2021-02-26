'use strict';

class List {
  _items = []

  constructor () {
    // Забираем массив со свойствами товаров, на основе которых будем создавать объекты товароы
    let goods = this.fetchGoods()

    // трансформируем наш массив со свойствами в массив с объектами
    goods = goods.map(cur => {
      return new GoodItem(cur)
    })

    // поштучно добавляем объекты в наш список
    this._items.push(...goods)

    // запускаем рендер
    this.render()
  }

  /**
   * Заглушка - имитатор запроса на сервер
   * Возвращает свойства, на основании которых будут создаваться объекты
   **/ 
  fetchGoods () {
    return [
      { name: 'Coat', price: 1500, alt: 'photo product', img: "img/goods1.png" },
      { name: 'Jacket', price: 1900, alt: 'photo product', img: "img/goods2.png" },
      { name: 'Hoodie', price: 1500, alt: 'photo product', img: "img/goods3.png" },
      { name: 'T-Shirt', price: 1000, alt: 'photo product', img: "img/goods4.png" },
      { name: 'Jacket', price: 5000, alt: 'photo product', img: "img/goods5.png" },
      { name: 'Polo', price: 1500, alt: 'photo product', img: "img/goods6.png" },
    ]
  }

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

  // в аргументах применена деструктуризация
  constructor ({ name, price, alt, img }) {
    this._name = name
    this._price = price
    this._alt = alt
    this._img = img
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
    _items = []

  constructor () {
    // Забираем массив выбраннх товаров
    let goods = this.cartGoods()

    // трансформируем наш массив со свойствами в массив с объектами
    goods = goods.map(cur => {
      return new CartItem(cur)
    })

    // поштучно добавляем объекты в наш список
    this._items.push(...goods)

    // запускаем рендер
    this.render()
  }

  /**
   * Заглушка - имитатор запроса на сервер
   * Возвращает свойства, на основании которых будут создаваться объекты
   **/ 
  cartGoods () {
    return [
      { name: 'MANGO  PEOPLE  T-SHIRT', price: 500, alt: 'photo product', img: "img/card__img.jpg", quantity: 1 },
      { name: 'MANGO  PEOPLE  T-SHIRT', price: 550, alt: 'photo product', img: "card__img.jpg", quantity: 1 },
    ]
  }

  render () {
    // В this.items у нас хранятся объекты CartItem
    // Проходимся по каждому такому объекту и вызываем у него метод рендера (каждая карточка товара рендерит сама себя)
    this._items.forEach(good => {
      good.render()
    })
  }
}

class CartItem {
  _name = ''
  _price = 0
  _alt = ''
  _img = 'img/goods1.png'
  quantity = 1

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
//new List(CartInstance)
const ListInstance = new List()

