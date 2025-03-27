import './style.css'
import Alpine from 'alpinejs'
import { router } from './router'
import { initCart } from './modules/cart'
import { state } from './store'

// Initialize AlpineJS
window.Alpine = Alpine
Alpine.start()

// Product data
const products = [
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
    name: 'iPhone 15 Pro',
    price: 299999,
    image: '/images/iphone15pro.jpg',
    description: 'Latest iPhone with A17 Pro chip'
  },
  {
    id: 4,
    name: 'MacBook Pro 14"',
    price: 499999,
    image: '/images/macbook-pro.jpg',
    description: 'M3 Pro chip, 14-inch Liquid Retina XDR display'
  }
]

// Initialize state
state.products = products

// Initialize the application
const initApp = () => {
  const contentDiv = document.querySelector('#content')
  
  // Initialize cart functionality
  initCart()
  
  // Handle navigation
  window.addEventListener('popstate', () => {
    router.handleRoute()
  })
  
  // Initial route handling
  router.handleRoute()
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp)
