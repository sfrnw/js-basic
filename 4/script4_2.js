var clothesTshirt = {
    color: 'red',
    quantity: 2,
    price: 110,
}
var clothesJeans = {
    color: 'blue',
    quantity: 0,
    price: 110,
}
var clothesHoodie = {
    color: 'green',
    quantity: 5,
    price: 990,
}
var clothesSocks = {
    color: 'white',
    quantity: 2,
    price: 50,
}

function countBasketPrice(tshirt,jeans,hoodie,socks) {
    basketPrice = tshirt.quantity*tshirt.price + jeans.quantity*jeans.price + hoodie.quantity*hoodie.price + socks.quantity*socks.price;
    return basketPrice;
}

alert (countBasketPrice(clothesTshirt,clothesJeans,clothesHoodie,clothesSocks));