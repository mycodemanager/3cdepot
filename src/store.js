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
  },

  removeFromCart(productId) {
    const index = this.cart.findIndex(item => item.id === productId)
    if (index !== -1) {
      this.cart.splice(index, 1)
    }
  },

  getCartTotal() {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  },

  clearCart() {
    this.cart = []
  },

  validateInviteCode(code) {
    return this.inviteCodes.includes(code)
  }
}
