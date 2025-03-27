import { router } from '../router'
import { state } from '../store'

export function renderLogin() {
  const content = document.querySelector('#content')
  
  content.innerHTML = `
    <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Login</h2>
      <form x-data="{ email: '', password: '' }" @submit.prevent="handleLogin">
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              x-model="email"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              x-model="password"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand">
          </div>
          <button 
            type="submit"
            class="w-full bg-brand text-white py-2 px-4 rounded-md hover:bg-brand/90 transition-colors">
            Login
          </button>
        </div>
      </form>
      <p class="mt-4 text-center text-sm text-gray-600">
        Don't have an account? 
        <a href="/register" @click.prevent="router.navigate('/register')" class="text-brand hover:text-brand/90">
          Register here
        </a>
      </p>
    </div>
  `

  // Add form submission handler
  window.handleLogin = async (e) => {
    const form = e.target
    const email = form.querySelector('input[type="email"]').value
    const password = form.querySelector('input[type="password"]').value

    // Here you would typically make an API call to authenticate
    // For demo purposes, we'll just simulate a successful login
    state.user = { email }
    router.navigate('/')
  }
}
