import { getCartItems, getCartTotal, processPayment } from '../modules/cart.js'
import { router } from '../router.js'
import { isLoggedIn } from '../modules/auth.js'

export function renderCheckout() {
  const content = document.getElementById('content')
  const cartItems = getCartItems()
  const total = getCartTotal()

  if (cartItems.length === 0) {
    router.navigate('/')
    return
  }

  content.innerHTML = `
    <div class="min-h-screen bg-gray-50 pt-16">
      <div class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto">
          <h1 class="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
          
          <!-- Order Summary -->
          <div class="bg-white shadow rounded-lg p-6 mb-8">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
            <div class="divide-y divide-gray-200">
              ${cartItems.map(item => `
                <div class="flex py-4">
                  <div class="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img src="${item.image}" alt="${item.name}" class="h-full w-full object-cover object-center">
                  </div>
                  <div class="ml-4 flex flex-1 flex-col">
                    <div>
                      <div class="flex justify-between text-base font-medium text-gray-900">
                        <h3>${item.name}</h3>
                        <p class="ml-4">Rs. ${(item.price * item.quantity).toLocaleString()}</p>
                      </div>
                    </div>
                    <p class="mt-1 text-sm text-gray-500">Quantity: ${item.quantity}</p>
                  </div>
                </div>
              `).join('')}
            </div>
            <div class="border-t border-gray-200 pt-4 mt-4">
              <div class="flex justify-between text-base font-medium text-gray-900">
                <p>Total</p>
                <p>Rs. ${total.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <!-- Payment Method -->
          <div class="bg-white shadow rounded-lg p-6 mb-8">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Payment Method</h2>
            <div class="space-y-4" id="payment-methods">
              <label class="relative flex items-center p-4 border rounded-lg cursor-pointer hover:border-brand">
                <input type="radio" name="payment-method" value="easypaisa" class="h-4 w-4 text-brand" checked>
                <div class="ml-3 flex items-center">
                  <img src="/images/easypaisa.png" alt="EasyPaisa" class="h-8 w-auto mr-3">
                  <div>
                    <span class="block text-sm font-medium text-gray-900">EasyPaisa</span>
                    <span class="block text-sm text-gray-500">Pay using your EasyPaisa account</span>
                  </div>
                </div>
              </label>
              <label class="relative flex items-center p-4 border rounded-lg cursor-pointer hover:border-brand">
                <input type="radio" name="payment-method" value="jazzcash" class="h-4 w-4 text-brand">
                <div class="ml-3 flex items-center">
                  <img src="/images/jazzcash.png" alt="JazzCash" class="h-8 w-auto mr-3">
                  <div>
                    <span class="block text-sm font-medium text-gray-900">JazzCash</span>
                    <span class="block text-sm text-gray-500">Pay using your JazzCash account</span>
                  </div>
                </div>
              </label>
            </div>
          </div>

          <!-- Place Order Button -->
          <button id="place-order" class="w-full bg-brand text-white py-3 px-4 rounded-md font-medium hover:bg-brand/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand">
            Place Order
          </button>
        </div>
      </div>
    </div>
  `

  // Handle place order button
  document.getElementById('place-order').addEventListener('click', async (e) => {
    e.preventDefault()
    
    // 检查用户是否已登录
    if (!isLoggedIn()) {
      // 如果未登录，跳转到登录页面
      router.navigate('/login')
      return
    }
    
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value
    const button = e.target
    
    button.disabled = true
    button.innerHTML = `
      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Processing...
    `
    
    try {
      const result = await processPayment(paymentMethod)
      // Show success page
      // renderPaymentSuccess(result)
    } catch (error) {
      // Show error message
      alert(error.message)
      button.disabled = false
      button.textContent = 'Place Order'
    }
  })
}

function renderPaymentSuccess(result) {
  const content = document.getElementById('content')
  
  content.innerHTML = `
    <div class="min-h-screen bg-gray-50 pt-16">
      <div class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
          <svg class="mx-auto h-24 w-24 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 class="mt-4 text-3xl font-bold text-gray-900">Payment Successful!</h1>
          <p class="mt-2 text-lg text-gray-600">Thank you for your purchase.</p>
          <p class="mt-1 text-gray-500">Order ID: ${result.orderId}</p>
          <div class="mt-8">
            <a href="/" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand hover:bg-brand/90">
              Continue Shopping
            </a>
          </div>
        </div>
      </div>
    </div>
  `
}
