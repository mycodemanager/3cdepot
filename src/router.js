import { renderHome } from './pages/home'
import { renderLogin } from './pages/login'
import { renderRegister } from './pages/register'
import { renderProduct } from './pages/product'
import { renderCheckout } from './pages/checkout'

const routes = {
  '/': renderHome,
  '/login': renderLogin,
  '/register': renderRegister,
  '/product': renderProduct,
  '/checkout': renderCheckout
}

export const router = {
  handleRoute() {
    const path = window.location.pathname
    const renderer = routes[path] || routes['/']
    renderer()
  },

  navigate(path) {
    window.history.pushState({}, '', path)
    this.handleRoute()
  }
}
