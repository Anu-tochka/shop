'use strict';

class List {
  items = []

  constructor () {
    // Забираем массив со свойствами товаров, на основе которых будем создавать объекты товароы
    let goods = this.fetchGoods()

    // трансформируем наш массив со свойствами в массив с объектами
    goods = goods.map(cur => {
      return new GoodItem(cur)
    })

    // поштучно добавляем объекты в наш список
    this.items.push(...goods)

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
    this.items.forEach(good => {
      good.render()
    })
  }
}

class GoodItem {
  name = ''
  price = 0
  alt = ''
  img = 'img/goods1.png'

  // в аргументах применена деструктуризация (ссылка на статью ниже)
  constructor ({ name, price, alt, img }) {
    this.name = name
    this.price = price
    this.alt = alt
    this.img = img
  }
  
  render () {
    // находим место куда рендерить
    const placeToRender = document.querySelector('.product-content')
    if (placeToRender) {
      // создаем блок, в который помещаем информацию о товаре
      const block = document.createElement('div')
      block.innerHTML = `<div class="product product_mb">
                <a href="product.html">
                    <img class="product__img" src="${this.img}" alt="${this.alt}">
                </a>
                <a class="product__add" href="#">
                    <img src="img/product-cart.svg" alt="cart"> Add to Cart
                </a>
                <div class="product__info">
                    <a href="product.html" class="product__name"> ${this.name} </a>
                    <p class="product__text">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                    <div class="product__price">$${this.price}</div>
                </div>
            </div>`

      // помещаем созданный блок на страницу
      placeToRender.appendChild(block)
    }
  }
}

const ListInstance = new List()
//
/*
const textAdd = 'Товар добавлен в корзину';

document.addEventListener('DOMContentLoaded', function() {
        let add = document.querySelectorAll('.product__add');
		add.forEach(function(item) {
			item.addEventListener('click', clickHandler);
		});
    });

/**
 * Обработчик клика 
 * @param {MouseEvent} event 
 */
function clickHandler(event) {
    alert(textAdd);
}

