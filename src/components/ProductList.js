const products = [
    { id: 1, name: 'Product 1', price: 1000, imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 2000, imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 1500, imageUrl: 'https://via.placeholder.com/150' },
];

const ProductList = () => {
    return `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            ${products.map(product => `
                <div class="bg-white rounded-lg shadow-md p-4">
                    <img src="${product.imageUrl}" alt="${product.name}" class="mb-2">
                    <h2 class="text-lg font-semibold">${product.name}</h2>
                    <p class="text-gray-700">Price: Rs. ${product.price}</p>
                    <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                        Add to Cart
                    </button>
                </div>
            `).join('')}
        </div>
    `;
};

export default ProductList;
