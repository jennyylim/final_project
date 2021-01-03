let carts = document.querySelectorAll('.add-cart');

let products = [

    {
        name: 'Wedding Package',
        tag: 'weddingpackage',
        price: 5000,
        inCart: 0
    },
    {
        name: 'Architectural',
        tag: 'architectural',
        price: 1500,
        inCart: 0
    },
    {
        name: 'Studio Photoshoot',
        tag: 'studio',
        price: 1000,
        inCart: 0
    },
    {
        name: 'Outdoor Photoshoot',
        tag: 'outdoor',
        price: 1000,
        inCart: 0
    },
    {
        name: 'Product',
        tag: 'product',
        price: 200,
        inCart: 0
    },
    {
        name: 'Drone',
        tag: 'drone',
        price: 1000,
        inCart: 0
    },
];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);

}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    console.log('My cartItems are', cartItems);


    if (cartItems != null) {

        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product) {
    // console.log('the product price is', product.price);
    let cartCost = localStorage.getItem('totalCost');

    console.log('my cartCost is', cartCost);
    console.log(typeof cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
    } else {
        localStorage.setItem('totalCost', product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let productContainer = document.querySelector('.products');

    if (cartItems && productContainer) {
        productContainer.innerHTML = '',
            Object.values(cartItems).map(item => {
                productContainer.innerHTML += `
                <div class="products">
                    <i class="far fa-times-circle fa-2x"></i>
                    <img src="./PhotoStudio/wedding4.jpg">  
                    <span class="sm-hide">${item.name}</span>
                </div>
           <div class="price">$${item.price}.00</div>
           <div class="quantity">
           <i class="far fa-arrow-alt-circle-left fa-2x"></i>
           <span>${item.inCart}</span>
           <i class="far fa-arrow-alt-circle-right fa-2x"></i>
           <span>${item.inCart}</span>
           </div>
            `
            })
    }

}

// when page loads, this will run and check it
onLoadCartNumbers();
displayCart();

// -----------------------------NOTES-----------------------------
// Line 129 - img source for product images 
// Code to be:
// <img src="./PhotoStudio${item.tag}.jpg"