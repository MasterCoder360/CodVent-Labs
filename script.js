const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');

function updateCartCount(newCount) {
    cartCount = newCount;
    cartCountElement.textContent = cartCount;
}

function addToCart() {
    updateCartCount(cartCount + 1);
}