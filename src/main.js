import './style.css'
import { router } from './router.js'
import { state } from './store.js'
import { initCart } from './modules/cart.js'
import { initAuth } from './modules/auth.js'
import { renderHome } from './pages/home.js'

// Initialize router and state after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Product data
  const products = [
    {
      id: 1,
      name: 'FlyMaster X500 Pro',
      price: 38999,
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      description: 'Advanced GPS Drone with 4K Camera, Obstacle Avoidance and 30-minute Flight Time'
    },
    {
      id: 2,
      name: 'DJI Tello EDU',
      price: 34999,
      image: 'https://m.media-amazon.com/images/I/71cigy7VX6L.jpg',
      description: 'Educational Drone with HD Camera and SDK for Programming'
    },
    {
      id: 3,
      name: 'Holy Stone HS720',
      price: 49500,
      image: 'https://m.media-amazon.com/images/I/71svU-MgG+L._AC_UF894,1000_QL80_.jpg',
      description: 'Foldable GPS Drone with 4K UHD Camera and 26 Minutes Flight Time'
    },
    {
      id: 4,
      name: 'ATTOP X-Pack 5 Pro',
      price: 32999,
      image: 'https://m.media-amazon.com/images/I/71O90hq0utL.jpg',
      description: 'Foldable Drone with 4K Camera and Gesture Control'
    },
    {
      id: 5,
      name: 'Ryze Tech Tello Premium',
      price: 30999,
      image: 'https://m.media-amazon.com/images/I/41thostxAtL.jpg',
      description: 'Beginner Drone with 720p Camera and 13-minute Flight Time'
    },
    {
      id: 6,
      name: 'Contixo F30',
      price: 46500,
      image: 'https://m.media-amazon.com/images/I/61LOp686d4L.jpg',
      description: 'Foldable Drone with 4K UHD Camera and Carrying Case'
    },
    {
      id: 7,
      name: 'Holy Stone HS175D',
      price: 43999,
      image: 'https://i5.walmartimages.com/asr/704f6118-c530-44cc-bdd9-b317bf3f9fbb.99da458356b0dde8181c187018b0c737.png',
      description: 'GPS Drone with 4K Camera and Brushless Motors'
    },
    {
      id: 8,
      name: 'Ruko F11 Pro',
      price: 47999,
      image: 'https://i5-richmedia.walmartimages.com/asr-rm/bf199e1d-e45a-47df-bcc0-a7140f07eb1d_360_merchant_manual_6.png',
      description: 'Foldable GPS Drone with 4K HD Camera and 30 Minutes Flight Time'
    },
    {
      id: 9,
      name: 'Potensic D88',
      price: 45999,
      image: 'https://vader-prod.s3.amazonaws.com/1627336091-419rg9xMUXL._SL500_.jpg',
      description: 'Foldable Drone with 4K Camera, GPS Return Home and Follow Me Functions'
    },
    {
      id: 10,
      name: 'Holy Stone HS440',
      price: 38999,
      image: 'https://m.media-amazon.com/images/I/71cigy7VX6L.jpg',
      description: 'Foldable FPV Drone with 1080P HD Camera and Carrying Case'
    },
    {
      id: 11,
      name: 'DEERC DE22',
      price: 40500,
      image: 'https://m.media-amazon.com/images/I/71O90hq0utL.jpg',
      description: 'GPS Drone with 2.7K Camera and Smart Return to Home'
    },
    {
      id: 12,
      name: 'Potensic Dreamer Pro',
      price: 49900,
      image: 'https://m.media-amazon.com/images/I/71svU-MgG+L._AC_UF894,1000_QL80_.jpg',
      description: 'Professional Drone with 4K Camera and 3-Axis Gimbal for Videography'
    },
    {
      id: 13,
      name: 'Contixo F35',
      price: 38500,
      image: 'https://i5.walmartimages.com/asr/704f6118-c530-44cc-bdd9-b317bf3f9fbb.99da458356b0dde8181c187018b0c737.png',
      description: 'GPS Foldable Drone with 4K UHD Camera and 30-minute Flight Time'
    },
    {
      id: 14,
      name: 'Holy Stone HS165',
      price: 32500,
      image: 'https://i5-richmedia.walmartimages.com/asr-rm/bf199e1d-e45a-47df-bcc0-a7140f07eb1d_360_merchant_manual_6.png',
      description: 'Foldable GPS Drone with 2K HD Camera and Optical Flow Positioning'
    },
    {
      id: 15,
      name: 'DEERC D20 Pro',
      price: 35999,
      image: 'https://m.media-amazon.com/images/I/61LOp686d4L.jpg',
      description: 'Mini Drone with 4K Camera, Gestures Selfie, and Auto Hover Function'
    },
    {
      id: 16,
      name: 'Potensic D85',
      price: 47999,
      image: 'https://m.media-amazon.com/images/I/41thostxAtL.jpg',
      description: '5G WiFi FPV Drone with 2K Camera and GPS Return Home Function'
    },
    {
      id: 17,
      name: 'SNAPTAIN SP7100',
      price: 42999,
      image: 'https://vader-prod.s3.amazonaws.com/1627336091-419rg9xMUXL._SL500_.jpg',
      description: 'GPS Drone with 4K UHD Camera and Follow Me Mode'
    },
    {
      id: 18,
      name: 'Contixo F24 Pro',
      price: 39500,
      image: 'https://m.media-amazon.com/images/I/71svU-MgG+L._AC_UF894,1000_QL80_.jpg',
      description: 'GPS Drone with 4K UHD Camera and Brushless Motors'
    },
    {
      id: 19,
      name: 'Holy Stone HS700D',
      price: 48500,
      image: 'https://m.media-amazon.com/images/I/71cigy7VX6L.jpg',
      description: 'GPS Drone with 2K FHD Camera and 22-minute Flight Time'
    },
    {
      id: 20,
      name: 'DEERC DE25',
      price: 34999,
      image: 'https://m.media-amazon.com/images/I/71O90hq0utL.jpg',
      description: 'Foldable Drone with 4K Camera and Optical Flow Positioning'
    },
    {
      id: 21,
      name: 'Ruko U11Pro',
      price: 44999,
      image: 'https://i5.walmartimages.com/asr/704f6118-c530-44cc-bdd9-b317bf3f9fbb.99da458356b0dde8181c187018b0c737.png',
      description: 'GPS Drone with 4K Camera and 52-minute Flight Time (2 Batteries)'
    },
    {
      id: 22,
      name: 'Autel Robotics EVO Nano',
      price: 49999,
      image: 'https://m.media-amazon.com/images/I/61LOp686d4L.jpg',
      description: 'Foldable Drone with 4K Camera and 28-minute Flight Time'
    },
    {
      id: 23,
      name: 'Hubsan Zino Pro Plus',
      price: 47500,
      image: 'https://i5-richmedia.walmartimages.com/asr-rm/bf199e1d-e45a-47df-bcc0-a7140f07eb1d_360_merchant_manual_6.png',
      description: 'Foldable Drone with 4K/30fps Camera and 3-Axis Gimbal'
    },
    {
      id: 24,
      name: 'Potensic D58',
      price: 36999,
      image: 'https://m.media-amazon.com/images/I/41thostxAtL.jpg',
      description: 'GPS Drone with 1080P Camera and 36-minute Flight Time (2 Batteries)'
    },
    {
      id: 25,
      name: 'XIAOMI FIMI X8 SE',
      price: 49800,
      image: 'https://vader-prod.s3.amazonaws.com/1627336091-419rg9xMUXL._SL500_.jpg',
      description: 'Foldable 4K Camera Drone with 3-Axis Gimbal and 35-minute Flight Time'
    },
    {
      id: 26,
      name: 'JJRC X12',
      price: 41999,
      image: 'https://m.media-amazon.com/images/I/71svU-MgG+L._AC_UF894,1000_QL80_.jpg',
      description: 'GPS Drone with 4K Camera and 3-Axis Gimbal for Aerial Photography'
    },
    {
      id: 27,
      name: 'Holy Stone HS550',
      price: 39999,
      image: 'https://m.media-amazon.com/images/I/71cigy7VX6L.jpg',
      description: 'GPS Drone with 4K UHD Camera and 52-minute Flight Time (2 Batteries)'
    },
    {
      id: 28,
      name: 'SIMREX X20',
      price: 33999,
      image: 'https://m.media-amazon.com/images/I/71O90hq0utL.jpg',
      description: 'GPS Drone with 4K Camera and Brushless Motors'
    },
    {
      id: 29,
      name: 'MJX Bugs 4W',
      price: 31999,
      image: 'https://i5.walmartimages.com/asr/704f6118-c530-44cc-bdd9-b317bf3f9fbb.99da458356b0dde8181c187018b0c737.png',
      description: 'Foldable GPS Drone with 2K Camera and Optical Flow Positioning'
    },
    {
      id: 30,
      name: 'UPair Two',
      price: 44999,
      image: 'https://i5-richmedia.walmartimages.com/asr-rm/bf199e1d-e45a-47df-bcc0-a7140f07eb1d_360_merchant_manual_6.png',
      description: '4K Drone with 3-Axis Gimbal and 1KM Flight Range'
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
