import { router } from '../router'
import { state } from '../store'

export function renderRegister() {
  const content = document.querySelector('#content')
  
  content.innerHTML = `
    <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Register</h2>
      <form x-data="{ email: '', password: '', inviteCode: '' }" @submit.prevent="handleRegister">
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
          <div>
            <label class="block text-sm font-medium text-gray-700">Invite Code</label>
            <input 
              type="text" 
              x-model="inviteCode"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand">
          </div>
          <button 
            type="submit"
            class="w-full bg-brand text-white py-2 px-4 rounded-md hover:bg-brand/90 transition-colors">
            Register
          </button>
        </div>
      </form>
      <p class="mt-4 text-center text-sm text-gray-600">
        Already have an account? 
        <a href="/login" @click.prevent="router.navigate('/login')" class="text-brand hover:text-brand/90">
          Login here
        </a>
      </p>
    </div>
  `

  // Add form submission handler
  window.handleRegister = async (e) => {
    const form = e.target
    const email = form.querySelector('input[type="email"]').value
    const password = form.querySelector('input[type="password"]').value
    const inviteCode = form.querySelector('input[type="text"]').value

    if (!state.validateInviteCode(inviteCode)) {
      alert('Invalid invite code')
      return
    }

    // Here you would typically make an API call to register the user
    // For demo purposes, we'll just simulate a successful registration
    state.user = { email }
    router.navigate('/')
  }
}
