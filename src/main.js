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
    image: 'https://www-cdn.djiits.com/cms/uploads/32a4df4ce9e014fa44a38e24cc7fa97e.png',
    description: 'Lightweight and Portable 4K Drone'
  },
  {
    id: 3,
    name: 'DJI Air 3S',
    price: 89999,
    image: 'https://www-cdn.djiits.com/cms/uploads/204e70db1a193ad14c14a61db633dca9.png',
    description: 'Lightweight and Portable 4K Drone'
  },
  {
    id: 4,
    name: 'DJI Mini 4 Pro',
    price: 69999,
    image: 'https://www-cdn.djiits.com/cms/uploads/892e39b4b76dc5a83b267ed12ce69b97.png',
    description: 'Ultra-lightweight Sub-250g Drone'
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
