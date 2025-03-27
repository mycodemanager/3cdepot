// Cart state
let cart = []

// DOM Elements
let cartSidebar
let cartBackdrop
let cartPanel
let cartItems
let cartCount
let cartTotal

// Initialize cart
export function initCart() {
  // Get DOM elements
  cartSidebar = document.getElementById('cart-sidebar')
  cartBackdrop = cartSidebar.querySelector('.cart-backdrop')
  cartPanel = cartSidebar.querySelector('.cart-panel')
  cartItems = document.getElementById('cart-items')
  cartCount = document.getElementById('cart-count')
  cartTotal = document.getElementById('cart-total')

  // Load cart from localStorage
  const savedCart = localStorage.getItem('cart')
  if (savedCart) {
    cart = JSON.parse(savedCart)
    updateCartUI()
  }

  // Add event listeners
  document.querySelector('[data-cart-open]').addEventListener('click', showCart)
  document.querySelectorAll('[data-cart-close]').forEach(button => {
    button.addEventListener('click', hideCart)
  })
  cartBackdrop.addEventListener('click', hideCart)
}

// Show cart
function showCart() {
  cartSidebar.classList.remove('hidden')
  setTimeout(() => {
    cartBackdrop.classList.add('opacity-100')
    cartPanel.classList.remove('translate-x-full')
  }, 10)
}

// Hide cart
function hideCart() {
  cartBackdrop.classList.remove('opacity-100')
  cartPanel.classList.add('translate-x-full')
  setTimeout(() => {
    cartSidebar.classList.add('hidden')
  }, 300)
}

// Add to cart
export function addToCart(product) {
  const existingItem = cart.find(item => item.id === product.id)
  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({ ...product, quantity: 1 })
  }
  saveCart()
  updateCartUI()
  showCart()
}

// Update quantity
export function updateQuantity(productId, newQuantity) {
  if (newQuantity < 1) {
    removeFromCart(productId)
    return
  }
  const item = cart.find(item => item.id === productId)
  if (item) {
    item.quantity = newQuantity
    saveCart()
    updateCartUI()
  }
}

// Remove from cart
export function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId)
  saveCart()
  updateCartUI()
}

// Get cart total
export function getCartTotal() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
}

// Get cart items
export function getCartItems() {
  return [...cart]
}

// Clear cart
export function clearCart() {
  cart = []
  saveCart()
  updateCartUI()
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart))
}

// Update cart UI
function updateCartUI() {
  // Update cart count
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)
  cartCount.textContent = totalItems

  // Update cart items
  cartItems.innerHTML = cart.length === 0 
    ? '<div class="py-8 text-center"><p class="text-gray-500">Your cart is empty</p></div>'
    : cart.map(item => `
        <div class="flex py-6 animate-fadeIn">
          <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg border border-gray-200">
            <img src="${item.image}" alt="${item.name}" class="h-full w-full object-cover object-center">
          </div>
          <div class="ml-4 flex flex-1 flex-col">
            <div>
              <div class="flex justify-between">
                <h3 class="text-base font-medium text-gray-900">${item.name}</h3>
                <p class="ml-4 text-base font-medium text-gray-900">Rs. ${(item.price * item.quantity).toLocaleString()}</p>
              </div>
              <p class="mt-1 text-sm text-gray-500">${item.category}</p>
            </div>
            <div class="flex flex-1 items-end justify-between text-sm">
              <div class="flex items-center border rounded-lg bg-gray-50 px-2">
                <button onclick="window.cart.updateQuantity(${item.id}, ${item.quantity - 1})"
                        class="p-1 text-gray-600 hover:text-gray-900">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
                  </svg>
                </button>
                <span class="mx-2 text-gray-900 font-medium">${item.quantity}</span>
                <button onclick="window.cart.updateQuantity(${item.id}, ${item.quantity + 1})"
                        class="p-1 text-gray-600 hover:text-gray-900">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                  </svg>
                </button>
              </div>
              <button onclick="window.cart.removeFromCart(${item.id})" 
                      class="font-medium text-gray-600 hover:text-gray-900">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      `).join('')

  // Update cart total
  cartTotal.textContent = `Rs. ${getCartTotal().toLocaleString()}`
}

// Process payment
export async function processPayment(paymentMethod) {
  return new Promise((resolve, reject) => {
    // Simulate payment processing
    setTimeout(() => {
      const success = Math.random() > 0.1 // 90% success rate
      if (success) {
        clearCart()
        resolve({
          success: true,
          message: 'Payment successful!',
          orderId: 'ORD' + Date.now()
        })
      } else {
        reject({
          success: false,
          message: 'Payment failed. Please try again.'
        })
      }
    }, 2000)
  })
}

// Export cart functions to window for onclick handlers
window.cart = {
  updateQuantity,
  removeFromCart,
  addToCart,
  processPayment
}