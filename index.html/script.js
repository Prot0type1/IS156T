let cart = [];

document.addEventListener("DOMContentLoaded", function() {
    const products = document.getElementById("products");

    window.addToCart = function (productId) {
        const product = document.querySelector(`.product[data-id="${productId}"]`);
        const productValue = product.dataset.id;
        const productName = product.dataset.name;
        const productPrice = parseFloat(product.dataset.price);

        const existingProduct = cart.find(item => item.id === productValue);

        if(existingProduct) {
            existingProduct.quantity += 1;
        }
        else{
            const newProduct = {
                id: productValue, 
                name: productName, 
                price: productPrice, 
                quantity: 1
            };
            cart.push(newProduct);
        }

        localStorage.setItem('cart', JSON.stringify(cart));

    };

});