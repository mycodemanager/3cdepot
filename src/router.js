import { renderHome } from './pages/Home'
import { renderCheckout } from './pages/checkout'
import { renderLogin } from './pages/login'

const routes = {
  '/': renderHome,
  '/checkout': renderCheckout,
  '/login': renderLogin
}

export const router = {
  init() {
    // 获取内容容器
    this.contentContainer = document.querySelector('#content')
    if (!this.contentContainer) {
      console.error('Content container not found')
      return
    }

    // 处理初始路由
    this.navigate(window.location.pathname)

    // 处理导航点击
    document.addEventListener('click', (e) => {
      if (e.target.matches('a') && e.target.href) {
        e.preventDefault()
        const url = new URL(e.target.href)
        this.navigate(url.pathname)
      }
    })

    // 处理浏览器后退/前进按钮
    window.addEventListener('popstate', () => {
      this.navigate(window.location.pathname)
    })
  },

  navigate(pathname) {
    window.history.pushState({}, '', pathname)
    const route = routes[pathname] || routes['/']
    this.render(route)
  },

  render(route) {
    if (this.contentContainer) {
      route(this.contentContainer)
    }
  }
}
