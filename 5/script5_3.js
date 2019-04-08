var Product = {
    type: [ 'tshirt' , 'jeans' , 'hoodie' , 'socks' ],
    color: [ 'red' , 'blue' , 'green' , 'white' ],
    quantity: [ 1 , 3 , 4 , 3 ],
    price: [ 110 , 110 , 990 , 50 ],
};
var ourBasketPrice = 0;
var ourQuantity = 0;
for (var i = 1; i < Product.type.length; i++) {
    var row = ourCatalog.appendChild(document.createElement("div"));
    var informationAboutProduct = 'Тип продукта:' + Product.type[i] + '; Цвет: ' + Product.color[i] + '; Количество: ' + Product.quantity[i] + '; Цена: ' + Product.price[i];
    row.innerHTML = informationAboutProduct;
    ourQuantity += Product.quantity[i];
    ourBasketPrice += Product.price[i]*Product.quantity[i];
}
var ourBasket = ourCatalog.appendChild(document.createElement("div"));
if (ourBasketPrice == 0) {
    ourBasket.innerHTML = 'Корзина пуста!';
} else {
    ourBasket.innerHTML = 'В корзине ' + ourQuantity + ' товаров на сумму ' + ourBasketPrice + ' рублей';
};
