const products = [
    { id: 1, title: 'Notebook', price: 2000, img: "img/notebook.jpg" },
    { id: 2, title: 'Mouse', price: 20, img: "img/mouse.jpg" },
    { id: 3, title: 'Keyboard', price: 200, img: "img/keyboard.jpg" },
    { id: 4, title: 'Gamepad', price: 50, img: "img/gamepad.jpg" }
];

const renderProduct = (item) =>
    `<div class="product-item">
        <img src="${item.img}" alt="">    
        <h3>${item.title}</h3>
        <p>${item.price}</p>
        <button class="buy-btn">Купить</button>
    </div>`;

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
};

/* Запятые появляются из-за того, что в качестве разделителя
между элементами в массиве, используется запятая и при передачи
в innerHTML происходит преобразование в строку вместе с запятыми.
Для исправления этого (убрать запятые), можно использовать метод
join('') и не передать ему в качестве разделителя - ничего ('').
*/

renderPage(products);
