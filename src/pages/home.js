import { state } from '../store'
import { addToCart } from '../modules/cart'

export function renderHome(content) {
  if (!content) return

  content.innerHTML = `
    <div class="min-h-screen">
      <!-- Hero Section -->
      <div class="relative h-[80vh] bg-gray-900">
        <div class="absolute inset-0">
          <video class="w-full h-full object-cover opacity-60" autoplay loop muted playsinline>
            <source src="https://www-cdn.djiits.com/dps/b19f3e4db880bcf0d7e9a0cadf6e8b1f.mp4" type="video/mp4">
          </video>
          <div class="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent"></div>
        </div>
        <div class="relative h-full container max-w-7xl mx-auto flex flex-col justify-center">
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-3xl">
            Explore the World from Above
          </h1>
          <p class="mt-6 text-xl text-gray-300 max-w-2xl">
            Discover our collection of premium drones for photographers, filmmakers, and enthusiasts.
            Capture stunning aerial shots and explore new perspectives.
          </p>
          <div class="mt-10 flex gap-4">
            <a href="#products" class="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-brand hover:bg-brand/90 transition-colors">
              Shop Now
            </a>
            <a href="#learn-more" class="inline-flex items-center px-8 py-4 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </div>

      <!-- Category Navigation -->
      <div class="bg-white shadow-sm sticky top-16 z-40">
        <div class="container max-w-7xl mx-auto">
          <div class="flex space-x-8 py-4">
            <a href="#all" class="text-brand font-medium">All Drones</a>
            <a href="#professional" class="text-gray-600 hover:text-brand">Professional</a>
            <a href="#portable" class="text-gray-600 hover:text-brand">Portable</a>
            <a href="#fpv" class="text-gray-600 hover:text-brand">FPV</a>
          </div>
        </div>
      </div>

      <!-- Featured Products -->
      <div id="products" class="container max-w-7xl mx-auto py-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          ${state.products.map(product => {
            const productJson = JSON.stringify(product).replace(/"/g, '&quot;')
            return `
              <div class="group bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div class="aspect-w-1 aspect-h-1 bg-gray-200 relative overflow-hidden">
                  <img src="${product.image}" 
                       alt="${product.name}" 
                       class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300">
                  <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button 
                      onclick="window.cart.addToCart(${productJson})"
                      class="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div class="p-6">
                  <div class="mb-2">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand/10 text-brand">
                      ${product.category}
                    </span>
                  </div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">${product.name}</h3>
                  <p class="text-gray-500 mb-4 line-clamp-2">${product.description}</p>
                  <div class="flex items-center justify-between">
                    <span class="text-2xl font-bold text-brand">Rs. ${product.price.toLocaleString()}</span>
                    <a href="/product/${product.id}" class="text-sm font-medium text-brand hover:text-brand/90">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            `
          }).join('')}
        </div>
      </div>

      <!-- Features Section -->
      <div class="bg-white py-24">
        <div class="container max-w-7xl mx-auto">
          <div class="text-center max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose Our Drones?
            </h2>
            <p class="mt-4 text-xl text-gray-500">
              Experience the perfect blend of technology and innovation with our premium drone collection.
            </p>
          </div>

          <div class="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div class="relative">
              <div class="absolute -inset-1">
                <div class="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-brand to-brand/60"></div>
              </div>
              <div class="relative bg-white p-8 rounded-2xl shadow-lg">
                <div class="flex items-center justify-center h-12 w-12 rounded-xl bg-brand text-white mb-6">
                  <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">High Performance</h3>
                <p class="text-gray-500">
                  State-of-the-art technology ensuring optimal flight performance and stability in any condition.
                </p>
              </div>
            </div>

            <div class="relative">
              <div class="absolute -inset-1">
                <div class="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-brand to-brand/60"></div>
              </div>
              <div class="relative bg-white p-8 rounded-2xl shadow-lg">
                <div class="flex items-center justify-center h-12 w-12 rounded-xl bg-brand text-white mb-6">
                  <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">Premium Quality</h3>
                <p class="text-gray-500">
                  Built with premium materials and rigorous quality control for unmatched durability and reliability.
                </p>
              </div>
            </div>

            <div class="relative">
              <div class="absolute -inset-1">
                <div class="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-brand to-brand/60"></div>
              </div>
              <div class="relative bg-white p-8 rounded-2xl shadow-lg">
                <div class="flex items-center justify-center h-12 w-12 rounded-xl bg-brand text-white mb-6">
                  <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">Smart Features</h3>
                <p class="text-gray-500">
                  Advanced intelligent features and autonomous capabilities for an enhanced flying experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="relative bg-gray-900">
        <div class="absolute inset-0">
          <img src="https://www-cdn.djiits.com/dps/6c74f1f03c6f3b4a29d7a1a1f7b1a0d1.jpg" alt="CTA Background" class="w-full h-full object-cover opacity-30">
          <div class="absolute inset-0 bg-gray-900/70 mix-blend-multiply"></div>
        </div>
        <div class="relative container max-w-7xl mx-auto py-24">
          <div class="max-w-3xl">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Take Flight?
            </h2>
            <p class="mt-6 text-xl text-gray-300">
              Join thousands of satisfied customers who have chosen our drones for their aerial photography and videography needs.
            </p>
            <div class="mt-10">
              <a href="#products" class="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-brand hover:bg-brand/90 transition-colors">
                Browse Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}

function handleAddToCart(product) {
  // Add your logic here to handle the add to cart functionality
  console.log(product)
}
