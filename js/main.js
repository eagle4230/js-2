class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
    }

    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000, img: "img/notebook.jpg" },
            { id: 2, title: 'Mouse', price: 20, img: "img/mouse.jpg" },
            { id: 3, title: 'Keyboard', price: 200, img: "img/keyboard.jpg" },
            { id: 4, title: 'Gamepad', price: 50, img: "img/gamepad.jpg" }
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render())
        }
    }

    getSum() {
        let sum = 0;
        for (let product of this.goods) {
            sum += product.price;
        }
        alert(`Сумма товаров равна: ${sum}`);
    }
}

class ProductItem {
    constructor(product) {
        this.img = product.img;
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="">    
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
                </div>`;
    }
}

let list = new ProductsList();
list.render();
list.getSum();

class Basket {
    addGood() { } // добавление товара в корзину
    removeGood() { } // удаление товара из корзины
    changeGood() { } // изменение товара в корзине
    render() { } // вывод списка товара(ов) из корзины
}

class ElemBasket {
    render() { } // верстка одного товара
}