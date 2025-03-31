// Store state
export const state = {
  cart: [],
  products: [
    {
      id: 1,
      name: 'DJI Mini 2 SE',
      price: 29999,
      image: 'https://www.drones-direct.co.uk/medias/1675692557-0-1-xlarge.jpg?context=bWFzdGVyfHJvb3R8MzE1NDQwfGltYWdlL2pwZWd8aDg2L2gyMS8xMTk3OTAyMTAyMzI2Mi5qcGd8NzA3ZTAyNDcwM2FmMThkZmQzZDIxYjFiOTA5NmZkNGZmYjExNTM1OWNlMDNiZGUxZTk0NDMyMjNhYmY2YmFhZg',
      description: 'Lightweight Portable Drone with 12MP Camera and 31-minute Flight Time'
    },
    {
      id: 2,
      name: 'Holy Stone HS720E',
      price: 35999,
      image: 'https://m.media-amazon.com/images/I/71RF4BCLiCL._AC_UF894,1000_QL80_.jpg',
      description: 'GPS Drone with 4K EIS Camera for Adults, Quadcopter with Brushless Motor'
    },
    {
      id: 3,
      name: 'Ruko F11 Pro',
      price: 32499,
      image: 'https://i.ebayimg.com/thumbs/images/g/jBEAAOSwneJnWMFi/s-l1200.jpg',
      description: '4K Drone with Camera for Adults, Quadcopter with 30 Mins Flight Time'
    },
    {
      id: 4,
      name: 'SYMA X500',
      price: 25990,
      image: 'https://m.media-amazon.com/images/I/71YQ+gE+rIL._AC_UF1000,1000_QL80_.jpg',
      description: 'GPS Drone with 4K Camera, Brushless Motor and Auto Return Home'
    },
    {
      id: 5,
      name: 'Potensic D88',
      price: 37500,
      image: 'https://m.media-amazon.com/images/I/71FZErTr6EL._AC_UF1000,1000_QL80_.jpg',
      description: 'Foldable Drone with 4K Camera, GPS Return Home and Follow Me Mode'
    },
    {
      id: 6,
      name: 'DJI Mini 3',
      price: 49899,
      image: 'https://www-cdn.djiits.com/cms/uploads/2df4df8c0af0b319d2243e6efd0e8e83.png',
      description: 'Lightweight Camera Drone with 4K HDR Video and 38-min Flight Time'
    },
    {
      id: 7,
      name: 'Hubsan Zino Pro',
      price: 39990,
      image: 'https://www.firstquadcopter.com/wp-content/uploads/2019/09/HUBSAN-ZINO-PRO-review.jpg',
      description: '4K UHD Camera Drone with 3-Axis Gimbal and 4km Range'
    },
    {
      id: 8,
      name: 'Contixo F24 Pro',
      price: 22990,
      image: 'https://m.media-amazon.com/images/I/81xAbRFkCdL._AC_UF350,350_QL80_.jpg',
      description: '4K UHD Camera Drone with GPS, 26 Mins Flight Time and Follow Me'
    },
    {
      id: 9,
      name: 'Holy Stone HS175D',
      price: 28999,
      image: 'https://www.halfchrome.com/wp-content/uploads/2023/09/Holystone-HS720R-31-1024x576.jpg',
      description: 'GPS Drone with 4K Camera for Adults, Brushless and Auto Return'
    },
    {
      id: 10,
      name: 'Ryze Tello',
      price: 9999,
      image: 'https://img.fixthephoto.com/blog/images/gallery/news_preview_mob_image__preview_812.png',
      description: 'Educational Drone with 720p HD Camera, Coding Education and 13-min Flight Time'
    },
    {
      id: 11,
      name: 'Ruko U11',
      price: 24990,
      image: 'https://cdn.shopify.com/s/files/1/0129/0806/8922/collections/ruko-u11pro-camera-drones-1_grande_1727af16-6dbe-4c2c-94a8-1869f540d5b0.webp?v=1701720359',
      description: 'GPS Drone with 4K Camera, 2-Axis Gimbal and 32 Mins Flight Time'
    },
    {
      id: 12,
      name: 'SYMA X7',
      price: 14499,
      image: 'https://m.media-amazon.com/images/I/61HwjouR-tL._AC_UF1000,1000_QL80_.jpg',
      description: 'Foldable GPS Drone with 4K Camera, Auto Return and Follow Me'
    },
    {
      id: 13,
      name: 'Potensic D68',
      price: 19999,
      image: 'https://m.media-amazon.com/images/I/61I3R+lPAQL._AC_UF894,1000_QL80_.jpg',
      description: 'GPS Drone with 4K Camera, Brushless Motor and 25 Mins Flight Time'
    },
    {
      id: 14,
      name: 'Holystone HS710',
      price: 29990,
      image: 'https://m.media-amazon.com/images/I/71TU4ELsbSL.jpg',
      description: 'GPS Drone with 4K Camera, Optical Flow and 26 Mins Flight Time'
    },
    {
      id: 15,
      name: 'Contixo F35',
      price: 18990,
      image: 'https://i.ytimg.com/vi/l3fbVwUL8sA/sddefault.jpg',
      description: '4K Camera Drone with GPS, Brushless Motors and 30 Mins Flight Time'
    },
    {
      id: 16,
      name: 'JJRC X12',
      price: 26999,
      image: 'https://m.media-amazon.com/images/I/71mVOBm714L._AC_UF1000,1000_QL80_.jpg',
      description: 'GPS Drone with 4K Camera, 3-Axis Gimbal and 25 Mins Flight Time'
    },
    {
      id: 17,
      name: 'MJX Bugs 4W',
      price: 23990,
      image: 'https://cdn.shopify.com/s/files/1/0066/2326/6969/products/MJX-Bugs-4W-B4W-4W-GPS-Brushless-WIFI-FPV-With-5G-4K-Camera-Foldable-RC-Drone-Quadcopter_3_1200x1200.jpg?v=1614074775',
      description: 'Brushless GPS Drone with 4K Camera and 23 Mins Flight Time'
    },
    {
      id: 18,
      name: 'Holystone HS360E',
      price: 15990,
      image: 'https://www.halfchrome.com/wp-content/uploads/2024/09/DSC09847-1024x576.jpg',
      description: 'Foldable Drone with 4K Camera, Optical Flow and 20 Mins Flight Time'
    },
    {
      id: 19,
      name: 'DJI Ryze Tello EDU',
      price: 13990,
      image: 'https://store.dji.com/dw/image/v2/BGJL_PRD/on/demandware.static/-/Sites-storeDJI-library/default/dw316da513/images/category/tello/brand/mobile/tello-edu-drone-mob.jpg?sw=1000&sh=800',
      description: 'Programmable Drone with 720p Camera and STEM Coding Education'
    },
    {
      id: 20,
      name: 'Hubsan H501S X4',
      price: 27990,
      image: 'https://m.media-amazon.com/images/I/71i1vcBohYL._AC_UF894,1000_QL80_.jpg',
      description: 'Brushless Drone with 1080p Camera, GPS and Follow Me'
    },
    {
      id: 21,
      name: 'Fimi X8 Mini',
      price: 46990,
      image: 'https://m.media-amazon.com/images/I/51l4plbPHIL._AC_UF1000,1000_QL80_.jpg',
      description: 'Portable Foldable Drone with 4K Camera, 3-Axis Gimbal and 31 Mins Flight Time'
    },
    {
      id: 22,
      name: 'Parrot Anafi',
      price: 49499,
      image: 'https://www.parrot.com/assets/s/1/p/1920_2_parrot-anafi-usa-drone-3.jpg',
      description: 'Portable Drone with 4K HDR Camera, 21MP Sensor and 25 Mins Flight Time'
    },
    {
      id: 23,
      name: 'SYMA X21',
      price: 7999,
      image: 'https://m.media-amazon.com/images/I/61OOpxq0hVL._AC_UF894,1000_QL80_.jpg',
      description: 'Mini Drone with Altitude Hold, Headless Mode and One Key Takeoff/Landing'
    },
    {
      id: 24,
      name: 'Potensic T25',
      price: 16990,
      image: 'https://m.media-amazon.com/images/I/71ynIMjwgwL._AC_UF894,1000_QL80_.jpg',
      description: 'GPS Drone with 1080p Camera, Follow Me and Custom Flight Path'
    },
    {
      id: 25,
      name: 'Ruko F11 GIM2',
      price: 45990,
      image: 'https://m.media-amazon.com/images/I/71mRGgM-a-L._AC_UF1000,1000_QL80_.jpg',
      description: 'GPS Drone with 4K Camera, 2-Axis Gimbal and 56 Mins Flight Time'
    },
    {
      id: 26,
      name: 'Holystone HS600',
      price: 34990,
      image: 'https://m.media-amazon.com/images/I/81kW7WyKgrL.jpg',
      description: 'Foldable Drone with 4K Camera, GPS and 26 Mins Flight Time'
    },
    {
      id: 27,
      name: 'Contixo F30',
      price: 21990,
      image: 'https://m.media-amazon.com/images/I/71rXjo2FwZL._AC_UF1000,1000_QL80_.jpg',
      description: 'Foldable GPS Drone with 4K Camera and 30 Mins Flight Time'
    },
    {
      id: 28,
      name: 'Autel Robotics Nano',
      price: 48990,
      image: 'https://images.autelrobotics.com/ms-space-nano/img/nano-intro-product.png',
      description: 'Compact Camera Drone with 4K Video and 28 Mins Flight Time'
    },
    {
      id: 29,
      name: 'SJRC F11 4K Pro',
      price: 30990,
      image: 'https://m.media-amazon.com/images/I/71h6Zs7CPOL._AC_UF1000,1000_QL80_.jpg',
      description: 'GPS Drone with 4K Camera, Brushless Motor and 30 Mins Flight Time'
    },
    {
      id: 30,
      name: 'ZLL SG907 Pro',
      price: 18999,
      image: 'https://i5.walmartimages.com/asr/b7a9b775-8710-44ef-9666-a89816137b24.bb5c69b25a41e8fb4721d902de7b7071.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      description: 'GPS Drone with 4K Camera, Optical Flow and 25 Mins Flight Time'
    },
    {
      id: 31,
      name: 'Holystone HS440',
      price: 11990,
      image: 'https://m.media-amazon.com/images/I/71tI2Zej31L._AC_UF1000,1000_QL80_.jpg',
      description: 'Foldable Drone with 1080p Camera and 20 Mins Flight Time'
    },
    {
      id: 32,
      name: 'SYMA X30',
      price: 13499,
      image: 'https://m.media-amazon.com/images/I/61HvIwi9IML._AC_UF894,1000_QL80_.jpg',
      description: 'Foldable GPS Drone with 4K Camera and 25 Mins Flight Time'
    },
    {
      id: 33,
      name: 'Potensic D50',
      price: 14990,
      image: 'https://m.media-amazon.com/images/I/71C7-rGMQVL._AC_UF894,1000_QL80_.jpg',
      description: 'Drone with 1080p Camera, GPS, Follow Me and 18 Mins Flight Time'
    },
    {
      id: 34,
      name: 'Hubsan Zino Mini Pro',
      price: 47990,
      image: 'https://www.firstquadcopter.com/wp-content/uploads/2021/06/Hubsan-ZINO-MINI-PRO-review.jpg',
      description: '4K HDR Camera Drone with 3-Axis Gimbal and 40 Mins Flight Time'
    },
    {
      id: 35,
      name: 'Eachine EX4',
      price: 26499,
      image: 'https://m.media-amazon.com/images/I/61bT6-ytZAL._AC_UF1000,1000_QL80_.jpg',
      description: '5G WIFI FPV Drone with 4K Camera, GPS and 25 Mins Flight Time'
    },
    {
      id: 36,
      name: 'JJRC X15',
      price: 31990,
      image: 'https://insidefpv.com/wp-content/uploads/2021/05/jjrc-x15-aurora-featured.jpg',
      description: 'GPS Drone with 6K Camera, 3-Axis Gimbal and 26 Mins Flight Time'
    },
    {
      id: 37,
      name: 'FIMI A3',
      price: 29999,
      image: 'https://m.media-amazon.com/images/I/61abj9RgLrL._AC_UF1000,1000_QL80_.jpg',
      description: 'Camera Drone with 1080p Video, 2-Axis Gimbal and 25 Mins Flight Time'
    },
    {
      id: 38,
      name: 'Holystone HS165',
      price: 19499,
      image: 'https://m.media-amazon.com/images/I/61qNj7O7qFL._AC_UF1000,1000_QL80_.jpg',
      description: 'Foldable GPS Drone with 4K Camera and 30 Mins Flight Time'
    },
    {
      id: 39,
      name: 'SYMA X9',
      price: 16999,
      image: 'https://m.media-amazon.com/images/I/61FeBOUXi-L._AC_UF1000,1000_QL80_.jpg',
      description: 'GPS Drone with 4K Camera, Optical Flow and 25 Mins Flight Time'
    },
    {
      id: 40,
      name: 'MJX Bugs 12 EIS',
      price: 22999,
      image: 'https://m.media-amazon.com/images/I/71EY5FhsyAL._AC_UF894,1000_QL80_.jpg',
      description: 'GPS Drone with 4K EIS Camera, Brushless Motors and 22 Mins Flight Time'
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
