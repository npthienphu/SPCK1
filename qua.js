// Dữ liệu sản phẩm
const products = {
    1: { name: 'Giỏ Quà Phú Quý', price: 2000000 },
    // Thêm các sản phẩm khác
};

// Giỏ hàng
let cart = {};

// Thêm vào giỏ hàng
function addToCart(productId) {
    if (cart[productId]) {
        cart[productId]++;
    } else {
        cart[productId] = 1;
    }
    updateCartDisplay();
    showCart();
}

// Cập nhật hiển thị giỏ hàng
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    let total = 0;
    let html = '';

    for (let productId in cart) {
        const product = products[productId];
        const quantity = cart[productId];
        const subtotal = product.price * quantity;
        total += subtotal;

        html += `
            <div class="cart-item">
                <p>${product.name} x ${quantity}</p>
                <p>${formatPrice(subtotal)}</p>
                <button onclick="removeFromCart(${productId})">Xóa</button>
            </div>
        `;
    }

    cartItems.innerHTML = html;
    cartTotal.textContent = formatPrice(total);
}

// Xóa khỏi giỏ hàng
function removeFromCart(productId) {
    if (cart[productId]) {
        delete cart[productId];
        updateCartDisplay();
    }
}

// Hiển thị giỏ hàng
function showCart() {
    const cartPopup = document.getElementById('cartPopup');
    cartPopup.style.display = 'block';
}

// Format giá tiền
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

// Thanh toán
function checkout() {
    if (Object.keys(cart).length === 0) {
        alert('Giỏ hàng trống!');
        return;
    }
    alert('Cảm ơn bạn đã đặt hàng!');
    cart = {};
    updateCartDisplay();
    document.getElementById('cartPopup').style.display = 'none';
}

// Thêm sự kiện cho các nút "Thêm vào giỏ"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productId = e.target.dataset.id;
        addToCart(productId);
    });
}); 