import { state } from '../store'
import { router } from '../router'

export function renderHome() {
  const content = document.querySelector('#content')
  
  const productsHtml = state.products.map(product => `
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="text-lg font-semibold text-gray-900">${product.name}</h3>
        <p class="mt-1 text-gray-500">${product.description}</p>
        <div class="mt-4 flex items-center justify-between">
          <span class="text-brand font-medium">Rs. ${product.price.toLocaleString()}</span>
          <button 
            @click="$store.state.addToCart(${JSON.stringify(product)})"
            class="bg-brand text-white px-4 py-2 rounded-md hover:bg-brand/90 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `).join('')

  content.innerHTML = `
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Featured Products</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${productsHtml}
      </div>
    </div>
  `
}
