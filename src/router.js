import { renderHome } from './pages/Home'
import { renderLogin } from './pages/Login'
import { renderRegister } from './pages/Register'
import { renderCheckout } from './pages/Checkout'
import { isLoggedIn } from './modules/auth'

class Router {
  constructor() {
    this.routes = {
      '/': renderHome,
      '/login': renderLogin,
      '/register': renderRegister,
      '/checkout': renderCheckout
    }
  }

  init() {
    window.addEventListener('popstate', () => this.handleRoute())
    this.handleRoute()
  }

  handleRoute() {
    const path = window.location.pathname
    const renderer = this.routes[path]
    
    // 检查是否需要登录
    if (path === '/checkout' && !isLoggedIn()) {
      this.navigate('/login')
      return
    }
    
    if (renderer) {
      const content = document.getElementById('content')
      renderer(content)
    } else {
      this.navigate('/')
    }
  }

  navigate(path) {
    window.history.pushState({}, '', path)
    this.handleRoute()
  }
}

export const router = new Router()
