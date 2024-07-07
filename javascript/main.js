// main.js

import { fetchData } from './apiService.js';
import { filterAndSortProducts } from './filterService.js';
import { showShimmer, hideShimmer,renderProducts,handleLoadError } from './utils.js';


let limit_products = 10;
let offset = 0;
let products = [];
let filteredProducts = [];


document.addEventListener('DOMContentLoaded', async function () {
    try {

        // Show shimmer initially
        showShimmer();

        await loadProducts(limit_products, offset);

        const loadMoreBtn = document.getElementById('load-more-btn');
        const searchInput = document.getElementById('search');
        const sortSelect = document.getElementById('sort');
        const categoryInputs = document.querySelectorAll('.filters input[type="checkbox"]');

        loadMoreBtn.addEventListener('click', async function () {
            offset += limit_products;
            // Show shimmer when loading more
            showShimmer();
            await loadProducts(limit_products, offset);
        });

        searchInput.addEventListener('input', function () {
            filterAndSortProducts(products, searchInput.value, sortSelect.value, getSelectedCategories(categoryInputs));
        });

        sortSelect.addEventListener('change', function () {
            filterAndSortProducts(products, searchInput.value, sortSelect.value, getSelectedCategories(categoryInputs));
        });

        categoryInputs.forEach(input => input.addEventListener('change', function () {
            filterAndSortProducts(products, searchInput.value, sortSelect.value, getSelectedCategories(categoryInputs));
        }));

    } catch (error) {
        handleLoadError(error);
    }
});

async function loadProducts(limit, offset) {
    try {
        const data = await fetchData(`/products?limit=${limit}&offset=${offset}`);
        products = [...products, ...data];
        filteredProducts = products;

        if (offset === 0) {
            hideShimmer();
        }
        if (offset > 0) {
            hideShimmer();
        }

        renderProducts(filteredProducts);

        document.getElementById('result-count-1').textContent = `${filteredProducts.length} Results`;
        document.getElementById('result-count-2').textContent = `${filteredProducts.length} Results`;

    } catch (error) {
        handleLoadError(error);
    }
}


function getSelectedCategories(categoryInputs) {
    return Array.from(categoryInputs)
        .filter(input => input.checked)
        .map(input => input.value);
}
