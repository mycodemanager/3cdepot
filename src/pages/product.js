import { state } from '../store'
import { router } from '../router'

export function renderProduct() {
  const content = document.querySelector('#content')
  const productId = new URLSearchParams(window.location.search).get('id')
  const product = state.products.find(p => p.id === parseInt(productId))

  if (!product) {
    router.navigate('/')
    return
  }

  content.innerHTML = `
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="md:flex">
            <div class="md:flex-shrink-0">
              <img class="h-48 w-full object-cover md:w-48" src="${product.image}" alt="${product.name}">
            </div>
            <div class="p-8">
              <h2 class="text-2xl font-bold text-gray-900">${product.name}</h2>
              <p class="mt-2 text-gray-500">${product.description}</p>
              <div class="mt-4">
                <span class="text-2xl font-bold text-brand">Rs. ${product.price.toLocaleString()}</span>
              </div>
              <div class="mt-6">
                <button 
                  @click="$store.state.addToCart(${JSON.stringify(product)})"
                  class="bg-brand text-white px-6 py-3 rounded-md hover:bg-brand/90 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}
