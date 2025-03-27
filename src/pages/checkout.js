import { state } from '../store'
import { router } from '../router'

export function renderCheckout() {
  const content = document.querySelector('#content')
  
  if (!state.cart.length) {
    router.navigate('/')
    return
  }

  content.innerHTML = `
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">Checkout</h2>
        
        <div class="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 class="text-lg font-semibold mb-4">Order Summary</h3>
          <div class="space-y-4">
            ${state.cart.map(item => `
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="font-medium">${item.name}</h4>
                  <p class="text-sm text-gray-500">Quantity: ${item.quantity}</p>
                </div>
                <span class="font-medium">Rs. ${(item.price * item.quantity).toLocaleString()}</span>
              </div>
            `).join('')}
            <div class="border-t pt-4">
              <div class="flex items-center justify-between font-bold">
                <span>Total</span>
                <span>Rs. ${state.getCartTotal().toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-lg font-semibold mb-4">Payment Method</h3>
          <div class="space-y-4">
            <div>
              <label class="flex items-center space-x-3">
                <input type="radio" name="payment" value="easypaisa" checked
                  class="h-4 w-4 text-brand focus:ring-brand border-gray-300">
                <span>EasyPaisa</span>
              </label>
            </div>
            <div>
              <label class="flex items-center space-x-3">
                <input type="radio" name="payment" value="jazzcash"
                  class="h-4 w-4 text-brand focus:ring-brand border-gray-300">
                <span>JazzCash</span>
              </label>
            </div>
          </div>

          <button 
            @click="handlePayment"
            class="mt-6 w-full bg-brand text-white py-3 px-4 rounded-md hover:bg-brand/90 transition-colors">
            Place Order
          </button>
        </div>
      </div>
    </div>
  `

  // Add payment handler
  window.handlePayment = () => {
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value
    
    // Show loading state
    content.innerHTML = `
      <div class="fixed inset-0 flex items-center justify-center bg-white">
        <div class="text-center">
          <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-brand mx-auto"></div>
          <h2 class="mt-4 text-xl font-semibold">Processing Payment...</h2>
          <p class="mt-2 text-gray-500">Please wait while we process your payment via ${paymentMethod}</p>
        </div>
      </div>
    `

    // Simulate payment processing
    setTimeout(() => {
      state.clearCart()
      router.navigate('/')
    }, 3000)
  }
}
