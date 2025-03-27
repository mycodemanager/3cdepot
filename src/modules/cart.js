import { state } from '../store'

export function initCart() {
  // Register Alpine store for cart functionality
  document.addEventListener('alpine:init', () => {
    Alpine.store('state', state)
  })

  // Update cart items display whenever cart changes
  const updateCartDisplay = () => {
    const cartItems = document.querySelector('#cart-items')
    const cartTotal = document.querySelector('#cart-total')
    
    if (cartItems && cartTotal) {
      cartItems.innerHTML = state.cart.map(item => `
        <div class="flex py-6 border-b">
          <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
            <img src="${item.image}" alt="${item.name}" class="h-full w-full object-cover">
          </div>
          <div class="ml-4 flex flex-1 flex-col">
            <div>
              <div class="flex justify-between text-base font-medium text-gray-900">
                <h3>${item.name}</h3>
                <p class="ml-4">Rs. ${(item.price * item.quantity).toLocaleString()}</p>
              </div>
            </div>
            <div class="flex flex-1 items-end justify-between text-sm">
              <div class="flex items-center space-x-2">
                <button 
                  @click="$store.state.updateQuantity(${item.id}, ${item.quantity - 1})"
                  class="text-gray-500 hover:text-gray-700">-</button>
                <span>Quantity: ${item.quantity}</span>
                <button 
                  @click="$store.state.updateQuantity(${item.id}, ${item.quantity + 1})"
                  class="text-gray-500 hover:text-gray-700">+</button>
              </div>
              <button 
                @click="$store.state.removeFromCart(${item.id})"
                class="font-medium text-brand hover:text-brand/90">
                Remove
              </button>
            </div>
          </div>
        </div>
      `).join('')

      cartTotal.textContent = `Rs. ${state.getCartTotal().toLocaleString()}`
    }
  }

  // Watch for cart changes
  const observer = new MutationObserver(updateCartDisplay)
  observer.observe(document.documentElement, {
    subtree: true,
    childList: true
  })
}