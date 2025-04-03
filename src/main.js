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
      "id": 1,
      "name": "FlyMaster X500 Pro",
      "price": 38999,
      "image": "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      "description": "Advanced GPS Drone with 4K Camera, Obstacle Avoidance and 30-minute Flight Time"
    },
    {
      "id": 2,
      "name": "DJI Mini 2",
      "price": 42999,
      "image": "https://m.media-amazon.com/images/I/51PpwI26rXL._AC_UF894,1000_QL80_.jpg",
      "description": "Ultralight and Foldable Drone with 4K Camera, 12MP Photos, 31-minute Flight Time, 10km HD Video Transmission"
    },
    {
      "id": 3,
      "name": "IZI Sky 4K",
      "price": 32999,
      "image": "https://i.ytimg.com/vi/ZCDRiN7rLvk/maxresdefault.jpg",
      "description": "Made in India Budget 4K Drone with GPS, Return Home Function, and 25-minute Flight Time"
    },
    {
      "id": 4,
      "name": "QuadAir Pro",
      "price": 18999,
      "image": "https://cdn.mos.cms.futurecdn.net/rUyQ4fJZe9FGmFLSXREMQc-1200-80.png",
      "description": "Foldable Drone with 1080p HD Camera, Follow Me Mode, 20-minute Battery Life"
    },
    {
      "id": 5,
      "name": "SkyExplorer C70",
      "price": 27499,
      "image": "https://ae01.alicdn.com/kf/Sddd5a52f99754979833ec3b3b4c5c3c5B.jpg_640x640q90.jpg",
      "description": "Professional Drone with 3-Axis Gimbal, 4K HDR Camera, 28 Minutes Flight Time, and Long Range Control"
    },
    {
      "id": 6,
      "name": "DJI Mavic Mini",
      "price": 34990,
      "image": "https://m.media-amazon.com/images/I/51eae+6sQoL.jpg",
      "description": "249g Ultralight Drone, 2.7K Camera, 30min Flight Time, 4km HD Video Transmission"
    },
    {
      "id": 7,
      "name": "Deer LU3 MAX",
      "price": 21500,
      "image": "https://sc04.alicdn.com/kf/He71507ab4e284d408a0c87f21b60a876n.jpg",
      "description": "GPS FPV Quadcopter with 8K Camera, 25mins Flight Time, and Brushless Motors"
    },
    {
      "id": 8,
      "name": "Holy Stone HS720E",
      "price": 29999,
      "image": "https://i.ytimg.com/vi/DPYuHH7pWs4/hq720.jpg",
      "description": "EIS 4K Drone with UHD Camera, 5G WiFi Transmission, GPS, 26min Flight Time"
    },
    {
      "id": 9,
      "name": "Eagle Pro X47",
      "price": 45999,
      "image": "https://www.jouav.com/wp-content/uploads/2022/07/cw-40-5.jpg",
      "description": "Professional Aerial Photography Drone with 6K Camera, 35min Flight Time, and Advanced Obstacle Sensing"
    },
    {
      "id": 10,
      "name": "Mini Foldable Drone S8",
      "price": 6999,
      "image": "https://i.ytimg.com/vi/DPYuHH7pWs4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDTqM_JXgg2JbUf3TMb8wgq93zGKA",
      "description": "Portable Mini Drone with 720p Camera, Altitude Hold, Headless Mode, 12min Flight Time"
    },
    {
      "id": 11,
      "name": "Contixo F24 Pro",
      "price": 24500,
      "image": "https://m.media-amazon.com/images/I/71aBg0U5r+L.jpg",
      "description": "GPS Drone with 4K UHD Camera, 5G WiFi Transmission, 30min Flight Time, Follow Me Mode"
    },
    {
      "id": 13,
      "name": "Ruko F11 Pro",
      "price": 27999,
      "image": "https://media.licdn.com/dms/image/v2/D4E12AQGDlY9nbLpv6w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1731683931130?e=2147483647&v=beta&t=93_XzDMR8151SB2VmHYUEkH2D25M2i0pB9m-9oUNaSo",
      "description": "4K Drone with Brushless Motors, 30min Flight Time, 1.2km Video Transmission, Return Home"
    },
    {
      "id": 14,
      "name": "VIVITAR VTI Phoenix",
      "price": 18900,
      "image": "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      "description": "Foldable GPS Drone with 4K Camera, Follow Me, 22min Flight Time, Carrying Case"
    },
    {
      "id": 15,
      "name": "EMAX Tinyhawk II",
      "price": 13499,
      "image": "https://m.media-amazon.com/images/I/51PpwI26rXL.jpg",
      "description": "FPV Racing Drone with HD Camera, Ready-to-Fly Package, Indoor and Outdoor Flight"
    },
    {
      "id": 16,
      "name": "DEERC D20 Mini",
      "price": 5499,
      "image": "https://i.ytimg.com/vi/ZCDRiN7rLvk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCK8GRBgo9YlUSJuPpHfCdho_Ie1Q",
      "description": "Pocket Drone with 720p Camera, Altitude Hold, Headless Mode, 10min Flight Time"
    },
    {
      "id": 17,
      "name": "Potensic T25",
      "price": 19999,
      "image": "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      "description": "GPS Drone with 1080p Camera, Return Home, Follow Me Mode, 18min Flight Time"
    },
    {
      "id": 18,
      "name": "ProDrone X1800",
      "price": 36999,
      "image": "https://m.media-amazon.com/images/I/71e6Zl+gHJL.jpg",
      "description": "Professional 4K Drone with 3-Axis Gimbal, 5.8G FPV Transmission, 30min Flight Time, Advanced GNSS"
    },
    {
      "id": 21,
      "name": "JJRC X12 Aurora",
      "price": 31499,
      "image": "https://cdn.mos.cms.futurecdn.net/rUyQ4fJZe9FGmFLSXREMQc-1200-80.png",
      "description": "5G WiFi FPV Drone with 4K Camera, GPS, 25min Flight Time, 1.2km Control Distance"
    },
    {
      "id": 22,
      "name": "Snaptain SP510",
      "price": 15900,
      "image": "https://ae01.alicdn.com/kf/Sddd5a52f99754979833ec3b3b4c5c3c5B.jpg_640x640q90.jpg",
      "description": "Foldable GPS Drone with 2.7K Camera, Follow Me, Circle Fly, 30min Flight Time"
    },
    {
      "id": 23,
      "name": "Parrot Anafi",
      "price": 49999,
      "image": "https://m.media-amazon.com/images/I/51eae+6sQoL.jpg",
      "description": "4K HDR Camera Drone with 180° Vertical Tilt Gimbal, 25min Flight Time, 4km Range"
    },
    {
      "id": 24,
      "name": "XiaomiMI Drone 4K",
      "price": 34999,
      "image": "https://www.jouav.com/wp-content/uploads/2022/07/cw-40-5.jpg",
      "description": "4K UHD Camera Drone with 3-Axis Gimbal, Vision Positioning, 27min Flight Time"
    },
    {
      "id": 25,
      "name": "Autel Robotics EVO Nano",
      "price": 47999,
      "image": "https://m.media-amazon.com/images/I/71aBg0U5r+L.jpg",
      "description": "Ultra-light Sub-249g Drone with 4K Camera, 28min Flight Time, RYYB Sensor"
    },
    {
      "id": 26,
      "name": "ZLRC SG906 Pro 2",
      "price": 18999,
      "image": "https://i.ytimg.com/vi/ZCDRiN7rLvk/maxresdefault.jpg",
      "description": "GPS Drone with 4K Camera, 3-Axis Gimbal, 5G WiFi FPV, 26min Flight Time"
    },
    {
      "id": 27,
      "name": "Holystone HS110G",
      "price": 14499,
      "image": "https://m.media-amazon.com/images/I/51PpwI26rXL._AC_UF894,1000_QL80_.jpg",
      "description": "GPS FPV Drone with 1080P Camera, Tap Fly, Follow Me, 16min Flight Time"
    },
    {
      "id": 28,
      "name": "Zeraxa Z65",
      "price": 38499,
      "image": "https://sc04.alicdn.com/kf/He71507ab4e284d408a0c87f21b60a876n.jpg",
      "description": "Professional 6K Camera Drone with 3-Axis Stabilization, 35min Flight Time, 12km Range"
    },
    {
      "id": 30,
      "name": "Bugs 16 Pro",
      "price": 21999,
      "image": "https://i.ytimg.com/vi/DPYuHH7pWs4/hq720.jpg",
      "description": "GPS Drone with 4K Camera, 5G WiFi FPV, EIS Anti-shake, 25min Flight Time"
    },
    {
      "id": 33,
      "name": "FIMI X8 SE",
      "price": 39999,
      "image": "https://m.media-amazon.com/images/I/71e6Zl+gHJL.jpg",
      "description": "4K Camera Drone with 3-Axis Mechanical Gimbal, 35min Flight Time, 8km Range"
    },
    {
      "id": 34,
      "name": "JJRC X11",
      "price": 16990,
      "image": "https://i.ytimg.com/vi/ZCDRiN7rLvk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCK8GRBgo9YlUSJuPpHfCdho_Ie1Q",
      "description": "5G WiFi FPV GPS Drone with 2K Camera, 2-Axis Gimbal, 20min Flight Time"
    },
    {
      "id": 35,
      "name": "Contixo F35",
      "price": 28999,
      "image": "https://media.licdn.com/dms/image/v2/D4E12AQGDlY9nbLpv6w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1731683931130?e=2147483647&v=beta&t=93_XzDMR8151SB2VmHYUEkH2D25M2i0pB9m-9oUNaSo",
      "description": "GPS Drone with 4K UHD Camera, 32min Flight Time, 1.5km Range, Carrying Case"
    },
    {
      "id": 36,
      "name": "Potensic D88",
      "price": 33499,
      "image": "https://ae01.alicdn.com/kf/Sddd5a52f99754979833ec3b3b4c5c3c5B.jpg_640x640q90.jpg",
      "description": "5G WiFi FPV Drone with 4K Camera, Brushless Motors, 20min Flight Time, 1.5km Range"
    },
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
