// Dynamic content loading
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sharma Masala - Welcome to authentic Indian spices!');
    
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.product-card button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Added to cart! 🛒');
        });
    });
});

// Version check for CI/CD
console.log('Deployed via CI/CD Pipeline - Version 2.0');
