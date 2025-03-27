// Auth state
let currentUser = null
const validInviteCodes = ['INVITE2024', 'VIP2024'] // 这里可以根据需要修改邀请码

// Get current user
export function getCurrentUser() {
  return currentUser
}

// Check if user is logged in
export function isLoggedIn() {
  return currentUser !== null
}

// Login
export function login(email, password) {
  return new Promise((resolve, reject) => {
    // 这里应该调用后端API，现在用localStorage模拟
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const user = users.find(u => u.email === email)
    
    if (user && user.password === password) {
      currentUser = user
      localStorage.setItem('currentUser', JSON.stringify(user))
      resolve(user)
    } else {
      reject(new Error('Invalid email or password'))
    }
  })
}

// Register
export function register(email, password, inviteCode) {
  return new Promise((resolve, reject) => {
    // 验证邀请码
    if (!validInviteCodes.includes(inviteCode)) {
      reject(new Error('Invalid invite code'))
      return
    }

    // 这里应该调用后端API，现在用localStorage模拟
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    
    // 检查邮箱是否已被注册
    if (users.some(u => u.email === email)) {
      reject(new Error('Email already registered'))
      return
    }

    const newUser = {
      id: Date.now(),
      email,
      password,
      createdAt: new Date().toISOString()
    }

    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))
    
    // 自动登录
    currentUser = newUser
    localStorage.setItem('currentUser', JSON.stringify(newUser))
    resolve(newUser)
  })
}

// Logout
export function logout() {
  currentUser = null
  localStorage.removeItem('currentUser')
}

// Initialize auth state
export function initAuth() {
  const savedUser = localStorage.getItem('currentUser')
  if (savedUser) {
    currentUser = JSON.parse(savedUser)
  }
}
