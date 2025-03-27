export function initProductListing(container, products) {
  const productGrid = document.createElement('div');
  productGrid.className = 'product-grid';

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="flex justify-between items-center mt-4">
          <span class="product-price">¥${product.price.toLocaleString()}</span>
          <button @click="$store.cart.addItem(${product.id})">
            加入购物车
          </button>
        </div>
      </div>
    `;
    productGrid.appendChild(card);
  });

  container.appendChild(productGrid);
}