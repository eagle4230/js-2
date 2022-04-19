const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];//массив товаров из JSON документа
        this._getProducts()
            .then(data => { //data - объект js
                this.goods = data;
                this.render()
            });
    }
    _getProducts() {

        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });

    }
    calcSum() {
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
}

class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

class Basket {
    constructor(container = '.cart-block') {
        this.container = container;
        this.goods = []; //пустой массив товаров
        this._clickBasket(); //показ корзины (toggle)
        this._getBasketItem() //запрос иссхоника из вне
            .then(data => { //получение данных
                this.goods = data.contents; //заполняем массив товаров
                this.render(); //вывод в container
            });
    }

    _clickBasket() {
        document.querySelector('.btn-cart').addEventListener('click', () => {
            document.querySelector(this.container).classList.toggle('invisible');
        });
    }

    _getBasketItem() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new BasketItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

        // заголовок корзины
        const tagPtitle = document.createElement('p');
        tagPtitle.className = 'titlebasket';
        tagPtitle.textContent = `Ваш выбор:`;
        document.querySelector(".cart-block").prepend(tagPtitle);

        // общая сумма
        //console.log(block);
        const tagPtotal = document.createElement('p');
        tagPtotal.className = 'totalsum';
        const singleSum = document.querySelectorAll(".product-price");
        //console.log(singleSum);
        const totalSingle = document.querySelectorAll('.product-price');
        let total = 0;
        totalSingle.forEach(el => {
            total += +el.innerHTML;
        });
        console.log(total);
        tagPtotal.textContent = `Итого: ${total} $`;
        document.querySelector(".cart-block").append(tagPtotal);
    }
}
class BasketItem {
    constructor(product) {
        this.img = 'https://via.placeholder.com/70x70';
        this.id = product.id_product;
        this.price = product.price;
        this.name = product.product_name;
        this.quantity = product.quantity;
        //console.log(product);
    }
    render() {
        return `<div class="cart-item" data-id="${this.id}">
                <div class="product-cart">
                <img src="${this.img}" alt="Here image">
                <div class="product-desc">
                <p class="product-title">${this.name}</p>
                <p class="product-quantity">Кол-во: ${this.quantity}</p>
                <p class="product-single-price">${this.price} $</p>
                </div>
                </div>
                <div class="total-single">
                <p class="product-price">${this.quantity * this.price}</p>
                <button class="del-btn" data-id="${this.id}">Удалить</button>
                <button class="add-btn" data-id="${this.id}">Добавить</button>
                </div>
                </div>`
    }
}

let list = new ProductsList();
let obj = new Basket();
