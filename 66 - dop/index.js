import { getProducts, getCategories, fetchProductsByCategory, fetchSearchByProducts } from './requests.js';
import { displayProducts, formatter } from './utils.js';

const productsContainer = document.querySelector('.js-products');
const select = document.querySelector('.js-select');
const searchInput = document.querySelector('.js-search');

select.addEventListener('change', (e) => {
    const category = e.target.value;
    fetchProductsByCategory(category).then(products => {
        displayProducts(productsContainer, products);
    });
});

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value;
    if (searchTerm) {
        fetchSearchByProducts(searchTerm).then(products => {
            displayProducts(productsContainer, products);
        });
    } else {
        getProducts().then(products => {
            displayProducts(productsContainer, products);
        });
    }
});

getProducts().then(products => {
    displayProducts(productsContainer, products);
});

getCategories().then(categories => {
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        select.appendChild(option);
    });
});
