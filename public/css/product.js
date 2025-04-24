function buyNow(productId) {
    // Redirect to checkout with product
    window.location.href = `/checkout?product=${productId}`;
}

function addToCart(productId) {
    fetch('/cart/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId })
    })
    .then(response => response.json())
    .then(data => {
        // Update cart count in navbar
        const cartBadge = document.querySelector('.cart-badge');
        if (cartBadge) {
            cartBadge.textContent = data.cartCount;
        }
        // Show success message
        alert('Product added to cart!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to add product to cart');
    });
}