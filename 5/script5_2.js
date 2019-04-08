var clothesTshirt = {
    color: 'red',
    quantity: 1,
    price: 110,
}
var clothesJeans = {
    color: 'blue',
    quantity: 3,
    price: 110,
}
var clothesHoodie = {
    color: 'green',
    quantity: 4,
    price: 990,
}
var clothesSocks = {
    color: 'white',
    quantity: 3,
    price: 50,
}

function countBasketPrice(tshirt,jeans,hoodie,socks) {
    basketPrice = tshirt.quantity*tshirt.price + jeans.quantity*jeans.price + hoodie.quantity*hoodie.price + socks.quantity*socks.price;
    return basketPrice;
}
var ourBasketPrice = countBasketPrice(clothesTshirt,clothesJeans,clothesHoodie,clothesSocks);
ourQuantity = clothesHoodie.quantity + clothesJeans.quantity + clothesSocks.quantity + clothesSocks.quantity;
var ourCatalog = document.getElementById("ourCatalog");
var ourBasket = ourCatalog.appendChild(document.createElement("div"));
if (ourBasketPrice == 0) {
    ourBasket.innerHTML = 'Корзина пуста!';
} else {
    ourBasket.innerHTML = 'В корзине ' + ourQuantity + ' товаров на сумму ' + ourBasketPrice + ' рублей';
}
