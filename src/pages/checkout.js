import { state } from '../store'
import { router } from '../router'

export function renderCheckout() {
  if (state.cart.length === 0) {
    router.navigate('/')
    return
  }

  const content = document.querySelector('#content')
  content.innerHTML = `
    <div class="min-h-screen bg-gray-50 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto">
          <!-- Order Summary -->
          <div class="bg-white shadow-lg rounded-lg mb-8 overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-200">
              <h2 class="text-xl font-semibold text-gray-800">Order Summary</h2>
            </div>
            <div class="px-6 py-4">
              ${state.cart.map(item => `
                <div class="flex items-center justify-between py-4 border-b border-gray-200 last:border-0">
                  <div class="flex items-center">
                    <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded">
                    <div class="ml-4">
                      <h3 class="text-sm font-medium text-gray-900">${item.name}</h3>
                      <p class="text-sm text-gray-500">Quantity: ${item.quantity}</p>
                    </div>
                  </div>
                  <p class="text-sm font-medium text-gray-900">Rs. ${(item.price * item.quantity).toLocaleString()}</p>
                </div>
              `).join('')}
              
              <div class="mt-6 pt-6 border-t border-gray-200">
                <div class="flex justify-between">
                  <p class="text-lg font-semibold text-gray-900">Total</p>
                  <p class="text-lg font-semibold text-gray-900">Rs. ${state.getCartTotal().toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Payment Methods -->
          <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-200">
              <h2 class="text-xl font-semibold text-gray-800">Payment Method</h2>
            </div>
            <div class="px-6 py-4 space-y-4">
              <div class="space-y-4" x-data="{ selectedMethod: '' }">
                <!-- Credit Card -->
                <label class="flex items-center p-4 border rounded-lg cursor-pointer hover:border-brand transition-colors"
                       :class="{ 'border-brand ring-2 ring-brand ring-opacity-50': selectedMethod === 'credit-card' }">
                  <input type="radio" name="payment-method" value="credit-card" class="text-brand"
                         x-model="selectedMethod">
                  <span class="ml-3">
                    <span class="block text-sm font-medium text-gray-900">Credit Card</span>
                    <span class="block text-sm text-gray-500">Pay with Visa, Mastercard, or American Express</span>
                  </span>
                </label>

                <!-- PayPal -->
                <label class="flex items-center p-4 border rounded-lg cursor-pointer hover:border-brand transition-colors"
                       :class="{ 'border-brand ring-2 ring-brand ring-opacity-50': selectedMethod === 'paypal' }">
                  <input type="radio" name="payment-method" value="paypal" class="text-brand"
                         x-model="selectedMethod">
                  <span class="ml-3">
                    <span class="block text-sm font-medium text-gray-900">PayPal</span>
                    <span class="block text-sm text-gray-500">Pay with your PayPal account</span>
                  </span>
                </label>

                <!-- Bank Transfer -->
                <label class="flex items-center p-4 border rounded-lg cursor-pointer hover:border-brand transition-colors"
                       :class="{ 'border-brand ring-2 ring-brand ring-opacity-50': selectedMethod === 'bank-transfer' }">
                  <input type="radio" name="payment-method" value="bank-transfer" class="text-brand"
                         x-model="selectedMethod">
                  <span class="ml-3">
                    <span class="block text-sm font-medium text-gray-900">Bank Transfer</span>
                    <span class="block text-sm text-gray-500">Pay directly from your bank account</span>
                  </span>
                </label>

                <!-- Place Order Button -->
                <button @click="processPayment(selectedMethod)"
                        :disabled="!selectedMethod"
                        class="mt-6 w-full py-3 px-4 text-white bg-brand rounded-md hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand disabled:opacity-50 disabled:cursor-not-allowed">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `

  // Add event listener for payment processing
  window.processPayment = async (method) => {
    if (!method) return

    try {
      // Show loading state
      renderProcessing()
      
      // Process payment
      await state.processPayment(method)
      
      // Redirect to success page
      router.navigate('/')
    } catch (error) {
      alert('Payment failed. Please try again.')
      router.navigate('/checkout')
    }
  }
}

function renderProcessing() {
  const content = document.querySelector('#content')
  content.innerHTML = `
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="text-center">
        <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-brand mx-auto"></div>
        <h2 class="mt-8 text-2xl font-semibold text-gray-900">Processing your payment...</h2>
        <p class="mt-2 text-gray-600">Please do not close this window.</p>
      </div>
    </div>
  `
}
