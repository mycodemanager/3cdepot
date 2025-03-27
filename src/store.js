export const state = {
  products: [],
  cart: [],
  user: null,
  inviteCodes: ['3CDEPOT2025'], // Add more invite codes as needed

  addToCart(product) {
    const existingItem = this.cart.find(item => item.id === product.id)
    if (existingItem) {
      existingItem.quantity++
    } else {
      this.cart.push({ ...product, quantity: 1 })
    }
    this.updateCartCount()
  },

  removeFromCart(productId) {
    const index = this.cart.findIndex(item => item.id === productId)
    if (index !== -1) {
      this.cart.splice(index, 1)
      this.updateCartCount()
    }
  },

  updateQuantity(productId, newQuantity) {
    const item = this.cart.find(item => item.id === productId)
    if (item) {
      if (newQuantity <= 0) {
        this.removeFromCart(productId)
      } else {
        item.quantity = newQuantity
        this.updateCartCount()
      }
    }
  },

  getCartTotal() {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  },

  getCartCount() {
    return this.cart.reduce((total, item) => total + item.quantity, 0)
  },

  updateCartCount() {
    const cartCount = document.querySelector('#cart-count')
    if (cartCount) {
      cartCount.textContent = this.getCartCount()
    }
  },

  clearCart() {
    this.cart = []
    this.updateCartCount()
  },

  validateInviteCode(code) {
    return this.inviteCodes.includes(code)
  }
}
