// Store state
export const state = {
  cart: [],
  products: [
    {
      id: 1,
      name: 'DJI Mavic 3 Pro',
      price: 159999,
      image: 'https://www-cdn.djiits.com/cms/uploads/ff6ae7f2efed6d80de477f6a634d6c4b.png',
      description: 'Professional Drone with 4/3 CMOS Hasselblad Camera'
    },
    {
      id: 2,
      name: 'DJI Air 3S',
      price: 89999,
      image: 'https://www-cdn.djiits.com/cms/uploads/204e70db1a193ad14c14a61db633dca9.png',
      description: 'Lightweight and Portable 4K Drone'
    },
    {
      id: 3,
      name: 'DJI Mini 4 Pro',
      price: 69999,
      image: 'https://www-cdn.djiits.com/cms/uploads/892e39b4b76dc5a83b267ed12ce69b97.png',
      description: 'Ultra-lightweight Sub-250g Drone'
    },
    {
      id: 4,
      name: 'DJI Flip',
      price: 79999,
      image: 'https://www-cdn.djiits.com/cms/uploads/32a4df4ce9e014fa44a38e24cc7fa97e.png',
      description: 'Foldable Camera Drone with Smart Features'
    }
  ],

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
    if (index > -1) {
      this.cart.splice(index, 1)
      this.updateCartCount()
    }
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
    const cartCount = document.querySelector('#cart-count')
    if (cartCount) {
      const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0)
      cartCount.textContent = totalItems.toString()
    }
  },

  getCartTotal() {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }
}
