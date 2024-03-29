export const getProducts = () => {
    return fetch('https://dummyjson.com/products/')
        .then(response => response.json())
        .then(data => data.products);
};

export const getCategories = () => {
    return fetch('https://dummyjson.com/products/categories')
        .then(response => response.json());
};

export const fetchProductsByCategory = (category) => {
    return fetch(`https://dummyjson.com/products/category/${category}`)
        .then(response => response.json())
        .then(data => data.products);
};

export const fetchSearchByProducts = (word) => {
    return fetch(`https://dummyjson.com/products/search?q=${word}`)
        .then(response => response.json())
        .then(data => data.products);
};
