import { state } from '../store'
import { router } from '../router'

export function renderHome() {
  const content = document.querySelector('#content')
  
  content.innerHTML = `
    <div class="min-h-screen bg-gray-50">
      <!-- Hero Section -->
      <div class="relative bg-gray-900 h-[60vh]">
        <div class="absolute inset-0">
          <img src="https://www-cdn.djiits.com/cms/uploads/ff6ae7f2efed6d80de477f6a634d6c4b.png" 
               class="w-full h-full object-cover opacity-50" alt="Hero">
          <div class="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent"></div>
        </div>
        <div class="relative max-w-7xl mx-auto pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex h-full items-center">
          <div class="text-white">
            <h1 class="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Premium Electronics at Your Fingertips
            </h1>
            <p class="text-xl md:text-2xl text-gray-300 max-w-2xl">
              Discover the latest in drone technology and consumer electronics
            </p>
          </div>
        </div>
      </div>

      <!-- Featured Products -->
      <div class="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          ${state.products.map(product => {
            const productJson = JSON.stringify(product).replace(/"/g, '&quot;')
            return `
              <div class="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105">
                <div class="aspect-w-16 aspect-h-9 bg-gray-200">
                  <img src="${product.image}" 
                       alt="${product.name}" 
                       class="w-full h-full object-cover">
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">${product.name}</h3>
                  <p class="text-gray-500 mb-4 line-clamp-2">${product.description}</p>
                  <div class="flex items-center justify-between">
                    <span class="text-2xl font-bold text-brand">Rs. ${product.price.toLocaleString()}</span>
                    <button 
                      @click="$store.state.addToCart(${productJson})"
                      class="bg-brand text-white px-4 py-2 rounded-lg hover:bg-brand/90 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            `
          }).join('')}
        </div>
      </div>

      <!-- Categories Section -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Shop by Category</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="relative rounded-lg overflow-hidden h-64 group">
            <img src="https://www-cdn.djiits.com/cms/uploads/ff6ae7f2efed6d80de477f6a634d6c4b.png" 
                 class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" alt="Drones">
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div class="absolute bottom-0 left-0 p-6">
              <h3 class="text-2xl font-bold text-white mb-2">Drones</h3>
              <p class="text-gray-200">Professional aerial photography</p>
            </div>
          </div>
          <div class="relative rounded-lg overflow-hidden h-64 group">
            <img src="/images/iphone15pro.jpg" 
                 class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" alt="Smartphones">
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div class="absolute bottom-0 left-0 p-6">
              <h3 class="text-2xl font-bold text-white mb-2">Smartphones</h3>
              <p class="text-gray-200">Latest mobile technology</p>
            </div>
          </div>
          <div class="relative rounded-lg overflow-hidden h-64 group">
            <img src="/images/macbook-pro.jpg" 
                 class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" alt="Laptops">
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div class="absolute bottom-0 left-0 p-6">
              <h3 class="text-2xl font-bold text-white mb-2">Laptops</h3>
              <p class="text-gray-200">Powerful computing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}
