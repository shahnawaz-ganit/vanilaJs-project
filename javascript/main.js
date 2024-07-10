// main.js

import { fetchData } from './apiService.js';
import { filterAndSortProducts } from './filterService.js';
import { showShimmer, hideShimmer,renderProducts,handleLoadError,updateResultCount } from './utils.js';


let LIMIT_PRODUCTS = 10;
let offset = 0;
let products = [];
let filteredProducts = [];

// Cache DOM elements
const loadMoreBtn = document.getElementById('load-more-btn');
const searchInput = document.getElementById('search');
const sortSelect = document.getElementById('sort');
const categoryInputs = document.querySelectorAll('.filters input[type="checkbox"]');


// Event Listeners
document.addEventListener('DOMContentLoaded', async function () {
    try {
        await loadProducts(LIMIT_PRODUCTS, offset);

        loadMoreBtn.addEventListener('click', async function () {
            offset += LIMIT_PRODUCTS;
            showShimmer(); // Show shimmer when loading more
            await loadProducts(LIMIT_PRODUCTS, offset);
        });

        searchInput.addEventListener('input', onFilterChange);
        sortSelect.addEventListener('change', onFilterChange);
        categoryInputs.forEach(input => input.addEventListener('change', onFilterChange));
    } catch (error) {
        handleLoadError(error);
    }
});

async function loadProducts(limit, offset) {
    try {

        showShimmer()

        const data = await fetchData(`/products?limit=${limit}&offset=${offset}`);
        products = [...products, ...data];
        filteredProducts = products;

        hideShimmer();

        renderProducts(filteredProducts);
        updateResultCount(filteredProducts.length)

    } catch (error) {
        hideShimmer();
        handleLoadError(error);
    }
}

function onFilterChange(){
    filterAndSortProducts(products, searchInput.value, sortSelect.value, getSelectedCategories(categoryInputs));
}

function getSelectedCategories(categoryInputs) {
    return Array.from(categoryInputs)
        .filter(input => input.checked)
        .map(input => input.value);
}
