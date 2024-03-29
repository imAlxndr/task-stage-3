export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export const displayProducts = (productsContainer, products) => {
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productHTML = `
        <div class="product">
            <img class="product__img" src="${product.thumbnail}" alt="${product.title}">
            <div class="product__body">
                <p class="product__price">${formatter.format(product.price)}</p>
                <h2 class="product__title">${product.title}</h2>
                <p class="product__descr">${product.description}</p>
                <p class="product__brand">Brand: <span>${product.brand}</span></p>
                <p class="product__category">Category: <span>${product.category}</span></p>
                <div class="rating product__rating">
                    <svg class="rating__ico" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                    <p class="rating__value">${product.rating}</p>
                </div>
            </div>
        </div>
        `;
        productsContainer.insertAdjacentHTML('beforeend', productHTML);
    });
};
