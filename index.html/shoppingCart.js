document.addEventListener("DOMContentLoaded", function() {
    const cartProducts = document.getElementById("cart-products");
    const cartTotal = document.getElementById("cartTotal");

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCart() {
        cartProducts.innerHTML = ""; 
        let total = 0;

        cart.forEach(item => {
            const cartProduct = document.createElement("li");
            cartProduct.innerHTML = `${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`;
            cartProducts.appendChild(cartProduct);
            total += item.price * item.quantity;
        });
        
        cartTotal.textContent = total.toFixed(2);
    }

    function submitForm(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;
        const credit = document.getElementById("credit").value;
        const exp = document.getElementById("exp").value;
        const cvv = document.getElementById("cvv").value;
        
        cart = [];
        localStorage.removeItem('cart');
        document.getElementById("cartForm").reset();
        updateCart();
        alert(`Thank you, ${name}. Your order has been placed.`);
    }

    updateCart();

    const cartForm = document.getElementById("cartForm");
    if(cartForm){
        cartForm.addEventListener("submit", submitForm);
    }

});