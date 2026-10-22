let cartCount = 0;
let cartTotal = 0;

function addToCart(productName, Price) {
    cartCount = cartCount + 1;
    cartTotal = cartTotal + Price;

    document.getElementById("cart-count").textContent = cartCount;

    document.getElementById("cart-total").textContent = 
    cartTotal.toLocaleString("en-NG");

    alert(productName + " has been added to your cart!");
}
