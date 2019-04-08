
var ourBasketMagazine=[1,1,1,1,1,1,111];
var ourBasketPrice = 0;

function countBasketPrice(basketPrice,basketMagazine) {
    for ( var i = 0; i < basketMagazine.length; i++) {
        basketPrice = basketPrice + basketMagazine[i];
    }
    return basketPrice;
}

alert (countBasketPrice(ourBasketPrice,ourBasketMagazine));