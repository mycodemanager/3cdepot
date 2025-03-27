import './style.css'
import { router } from './router'
import { state } from './store'
import { initCart } from './modules/cart'
import { initAuth } from './modules/auth'
import { renderHome } from './pages/Home'

// Initialize router and state after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Product data
  const products = [
    {
      id: 1,
      name: 'DJI Mavic 3 Pro',
      price: 159900,
      image: 'https://www-cdn.djiits.com/cms/uploads/ff6ae7f2efed6d80de477f6a634d6c4b.png',
      description: 'Professional Camera Drone with 4/3 CMOS Hasselblad Camera',
      category: 'professional'
    },
    {
      id: 2,
      name: 'DJI Air 3',
      price: 99900,
      image: 'https://www-cdn.djiits.com/cms/uploads/204e70db1a193ad14c14a61db633dca9.png',
      description: 'Lightweight Travel Drone with Dual Cameras',
      category: 'portable'
    },
    {
      id: 3,
      name: 'DJI Mini 4 Pro',
      price: 79900,
      image: 'https://www-cdn.djiits.com/cms/uploads/32a4df4ce9e014fa44a38e24cc7fa97e.png',
      description: 'Ultra-lightweight Sub-250g Drone with 4K Camera',
      category: 'portable'
    },
    {
      id: 4,
      name: 'DJI Avata 2',
      price: 89900,
      image: 'https://www-cdn.djiits.com/cms/uploads/cd92f9cd609022c4544cda890f6d2707.png',
      description: 'Immersive FPV Drone with 4K HDR Video',
      category: 'fpv'
    },
    {
      id: 5,
      name: 'DJI Avata',
      price: 79900,
      image: 'https://www-cdn.djiits.com/cms/uploads/7a4013b046ea008a2beb1f5f6ca74253.png',
      description: 'Ready-to-Fly FPV Drone with Goggles',
      category: 'fpv'
    },
    {
      id: 6,
      name: 'DJI FPV',
      price: 99900,
      image: 'https://www-cdn.djiits.com/cms/uploads/e82438f392527774127260e17848916d.png',
      description: 'High-Speed FPV Drone with 4K Camera',
      category: 'fpv'
    },
    {
      id: 7,
      name: 'DJI Mavic 3 Classic',
      price: 149900,
      image: 'https://www-cdn.djiits.com/cms/uploads/892e39b4b76dc5a83b267ed12ce69b97.png',
      description: 'Professional Drone with 4/3 CMOS Sensor',
      category: 'professional'
    },
    {
      id: 8,
      name: 'DJI Mini 3',
      price: 59900,
      image: 'https://www-cdn.djiits.com/cms/uploads/32a4df4ce9e014fa44a38e24cc7fa97e.png',
      description: 'Lightweight and Portable Drone for Beginners',
      category: 'portable'
    }
  ]

  // Initialize state with products
  state.products = products

  // Initialize cart
  initCart()

  // Initialize auth
  initAuth()

  // Render home page
  const content = document.getElementById('content')
  if (content) {
    renderHome()
  }

  // Initialize router
  router.init()
})
