// Store state
export const state = {
  cart: [],
  products: [
    {
      id: 1,
      name: 'DJI Mavic 3 Pro',
      price: 159900,
      image: 'https://www-cdn.djiits.com/cms/uploads/ff6ae7f2efed6d80de477f6a634d6c4b.png',
      description: 'Professional Camera Drone with 4/3 CMOS Hasselblad Camera'
    },
    {
      id: 2,
      name: 'DJI Air 3',
      price: 99900,
      image: 'https://www-cdn.djiits.com/cms/uploads/204e70db1a193ad14c14a61db633dca9.png',
      description: 'Lightweight Travel Drone with Dual Cameras'
    },
    {
      id: 3,
      name: 'DJI Mini 4 Pro',
      price: 79900,
      image: 'https://www-cdn.djiits.com/cms/uploads/32a4df4ce9e014fa44a38e24cc7fa97e.png',
      description: 'Foldable Camera Drone with Smart Features'
    }
  ],
  selectedPaymentMethod: null,
  orderStatus: null, // 'pending', 'processing', 'completed', 'failed'

  addToCart(product) {
    const existingItem = this.cart.find(item => item.id === product.id)
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      this.cart.push({ ...product, quantity: 1 })
    }
    this.updateCartCount()
  },

  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId)
    this.updateCartCount()
  },

  updateQuantity(productId, newQuantity) {
    const item = this.cart.find(item => item.id === productId)
    if (item) {
      if (newQuantity > 0) {
        item.quantity = newQuantity
      } else {
        this.removeFromCart(productId)
      }
      this.updateCartCount()
    }
  },

  updateCartCount() {
    const cartCount = document.getElementById('cart-count')
    if (cartCount) {
      cartCount.textContent = this.cart.reduce((total, item) => total + item.quantity, 0)
    }
  },

  getCartTotal() {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  },

  clearCart() {
    this.cart = []
    this.updateCartCount()
  },

  async processPayment(paymentMethod) {
    this.selectedPaymentMethod = paymentMethod
    this.orderStatus = 'processing'
    
    // 模拟支付处理
    return new Promise((resolve) => {
      setTimeout(() => {
        this.orderStatus = 'completed'
        this.clearCart()
        resolve({ success: true })
      }, 3000)
    })
  }
}
