var Product = [
    {
        type: 'tshirt',
        color: 'red',
        price: 110,
        quantity: 1
    },
    {
        type: 'jeans',
        color: 'blue',
        price: 110,
        quantity: 1
    },
    {
        type: 'hoodie',
        color: 'green',
        price: 990,
        quantity: 1
    },
    {
        type: 'socks',
        color: 'white',
        price: 50,
        quantity: 1
    }
];
function basketCount(basket) {
    var ourQuantity = 0;
    var ourBasketPrice = 0;
    var $ourBasket = document.getElementById( 'basket' );
    $ourBasket.innerHTML = '';
    var $ourBasketStatus = document.createElement( 'p' );
    if ( basket.quantity === 0 ) {
        $ourBasketStatus.textContent = 'Корзина пуста!';
    } else {
        for ( var i = 0; i < basket.length; i++ ) {
            ourBasketPrice += basket[i].price*basket[i].quantity;
            ourQuantity += basket[i].quantity;
        }
    };
    $ourBasketStatus.textContent = 'В корзине ' + ourQuantity + ' товаров на сумму ' + ourBasketPrice + ' рублей';
    $ourBasket.appendChild($ourBasketStatus);
}
var basket = [];
basketCount(basket);
function createCatalog(ourProduct) {
    var $catalog = document.getElementById( 'ourCatalog' );
    for ( var i = 0; i < ourProduct.length; i++ ) {
        var $productItem = document.createElement( 'div' );
        $productItem.classList.toggle( 'product-item' );
        $catalog.appendChild( $productItem ) ;
        var $productType = document.createElement( 'div' );
        $productType.textContent = 'Тип: ' +  ourProduct[i].type;
        $productItem.appendChild( $productType );
        var $productColor = document.createElement( 'div' );
        $productColor.textContent = 'Цвет:' + ' ' + ourProduct[i].color;
        $productItem.appendChild( $productColor );
        var $productPrice = document.createElement( 'div' );
        $productPrice.textContent = 'Цена:' + ' ' + ourProduct[i].price;
        $productItem.appendChild($productPrice);
        var $productButton = document.createElement( 'div' );
        $productButton.textContent = 'Купить';
        $productButton.classList.toggle( 'product-button' ) ;
        $productButton.dataset.original = i ;
        $productItem.appendChild($productButton);
    }
    $catalog.addEventListener( 'click', toTheBasket );
}
function toTheBasket(event) {
    var src = event.target.dataset.original;
    if (event.target.className === 'product-button') {
        basket.push(Product[src]);
        basket[basket.length - 1].quantity = + 1;
        basketCount(basket);
        event.stopPropagation();
    }
}
createCatalog(Product);
