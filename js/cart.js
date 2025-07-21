// Sample cart data
let cart = [];

const cartSidebar = document.getElementById("cart-sidebar");
const cartToggle = document.getElementById("cart-toggle");
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// Products array
const products = [
  { id: 1, name: "Polestar Polyester Buddy", price: 499 },
  { id: 2, name: "American Tourister Crete", price: 4320 },
  { id: 3, name: "Naaz Bags Collection", price: 220 },
  { id: 4, name: "Quechua Arpenaz Hiking", price: 399 },
  { id: 5, name: "Giordano Silver Luggage", price: 2895 },
  { id: 6, name: "Zwart Orange Backpack", price: 1699 }
];

// Toggle cart visibility
cartToggle.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent immediate close
  cartSidebar.classList.toggle("hidden");
});

// Close cart when clicking outside
document.addEventListener("click", (e) => {
  if (
    !cartSidebar.contains(e.target) &&
    !cartToggle.contains(e.target)
  ) {
    cartSidebar.classList.add("hidden");
  }
});

// Prevent cart from closing when clicking inside cart
cartSidebar.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Add to cart
document.querySelectorAll(".products-grid .btn-primary").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const product = products[index];
    cart.push(product);
    alert(`✅ ${product.name} added to cart`);
    updateCart();
  });
});

// Update cart display
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const div = document.createElement("div");
    div.classList.add("cart-item", "d-flex", "justify-content-between", "align-items-center", "my-2");
    div.innerHTML = `
      <span>${item.name} - ₹${item.price}</span>
      <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItems.appendChild(div);
  });

  cartTotal.innerText = total;
  cartCount.innerText = cart.length;
}

// Remove item
function removeFromCart(index) {
  const removedItem = cart[index];
  cart.splice(index, 1);
  alert(`❌ ${removedItem.name} removed from cart`);
  updateCart();
}

// Clear cart
function clearCart() {
  cart = [];
  alert("🧹 Cart has been cleared");
  updateCart();
}
