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
    this.handleRoute()

    // 添加点击事件监听器
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a')
      if (link && link.href && link.href.startsWith(window.location.origin)) {
        e.preventDefault()
        this.navigate(new URL(link.href).pathname)
      }
    })

    // 处理浏览器后退/前进按钮
    window.addEventListener('popstate', () => {
      this.handleRoute()
    })
  },

  navigate(path) {
    // 更新 URL
    window.history.pushState({}, '', path)
    // 处理路由
    this.handleRoute()
  },

  handleRoute() {
    const path = window.location.pathname
    const render = routes[path] || routes['/']

    if (render) {
      render(this.contentContainer)
    } else {
      console.error('No route found for path:', path)
      renderHome(this.contentContainer)
    }
  }
}
