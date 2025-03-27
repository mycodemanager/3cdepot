// 购物车状态管理
document.addEventListener('alpine:init', () => {
  Alpine.store('cart', {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,

    addItem(productId) {
      const existingItem = this.items.find(item => item.id === productId);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({
          id: productId,
          quantity: 1,
          ...products.find(p => p.id === productId)
        });
      }
      this.updateTotals();
    },

    removeItem(productId) {
      this.items = this.items.filter(item => item.id !== productId);
      this.updateTotals();
    },

    updateTotals() {
      this.totalQuantity = this.items.reduce((sum, item) => sum + item.quantity, 0);
      this.totalPrice = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },

    clearCart() {
      this.items = [];
      this.updateTotals();
    }
  });
});

export function initCart() {
  // 购物车图标
  const cartIcon = document.createElement('div');
  cartIcon.className = 'fixed top-4 right-4 z-50';
  cartIcon.innerHTML = `
    <button @click="cartOpen = !cartOpen" class="bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors">
      🛒 <span x-text="$store.cart.totalQuantity" class="ml-1"></span>
    </button>
  `;
  document.body.appendChild(cartIcon);

  // 购物车侧边栏
  const cartSidebar = document.createElement('div');
  cartSidebar.className = 'fixed top-0 right-0 h-full w-96 bg-white shadow-xl z-50 transform transition-transform'
    + ' translate-x-full';
  cartSidebar.setAttribute('x-show', 'cartOpen');
  cartSidebar.setAttribute('@click.away', 'cartOpen = false');
  cartSidebar.innerHTML = `
    <div class="p-6 h-full flex flex-col">
      <h2 class="text-2xl font-bold mb-6">Shopping Cart</h2>
      
      <div class="flex-1 overflow-y-auto" x-data="{ get items() { return $store.cart.items } }">
        <template x-for="item in items" :key="item.id">
          <div class="flex items-center mb-4 pb-4 border-b">
            <img :src="item.image" class="w-20 h-20 object-contain mr-4" alt="Product image">
            <div class="flex-1">
              <h3 class="font-semibold" x-text="item.name"></h3>
              <div class="flex items-center justify-between mt-2">
                <div class="flex items-center">
                  <button @click="$store.cart.removeItem(item.id)" class="text-gray-500 hover:text-red-600">
                    ×
                  </button>
                  <span class="mx-2" x-text="item.quantity"></span>
                  <button @click="$store.cart.addItem(item.id)" class="text-orange-500">+</button>
                </div>
                <span class="font-semibold" x-text="'Rs. ' + (item.price * item.quantity).toLocaleString()"></span>
              </div>
            </div>
          </div>
        </template>
      </div>

      <div class="border-t pt-4">
        <div class="flex justify-between text-xl font-bold mb-6">
          <span>Total:</span>
          <span x-text="'Rs. ' + $store.cart.totalPrice.toLocaleString()"></span>
        </div>
        <button @click="window.location.href='/checkout'" class="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition-colors">
          Proceed to Checkout
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(cartSidebar);
}