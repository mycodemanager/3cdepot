export function initProductListing(container, products) {
  const productGrid = document.createElement('div');
  productGrid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8';

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-contain mb-4">
      <h3 class="text-lg font-semibold mb-2">${product.name}</h3>
      <div class="flex justify-between items-center">
        <span class="text-red-600 font-bold">Rs. ${product.price.toLocaleString()}</span>
        <button @click="$store.cart.addItem(${product.id})"
          class="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">
          Add to Cart
        </button>
      </div>
    `;
    productGrid.appendChild(card);
  });

  container.appendChild(productGrid);
}