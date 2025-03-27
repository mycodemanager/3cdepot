import './style.css'
import { initProductListing } from './modules/product-list.js'
import { initCart } from './modules/cart.js'

// 初始化电商功能
const app = document.querySelector('#app')

// 产品数据
const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 5999,
    image: '/pay/JazzCash.png'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 12999,
    image: '/pay/easypaisa.png'
  }
]

// 初始化模块
function initApp() {
  initProductListing(app, products)
  initCart()
}

// 启动应用
document.addEventListener('DOMContentLoaded', initApp)
