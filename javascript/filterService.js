// filterService.js
import { renderProducts,handleLoadError, updateResultCount } from './utils.js';


// Function for filter and sort
export function filterAndSortProducts(products, searchInput, sortValue, selectedCategories) {
    try {

        searchInput = searchInput.toLowerCase();

        let filteredProducts = products.filter(product => {
            const matchesSearch = product.title.toLowerCase().includes(searchInput);
            const matchesCategory = selectedCategories.length ? selectedCategories.includes(product.category) : true;
            return matchesSearch && matchesCategory;
        });

        if (sortValue === 'asc') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortValue === 'desc') {
            filteredProducts.sort((a, b) => b.price - a.price);
        }

        let uniqueProducts = removeDuplicate(filteredProducts);
        renderProducts(uniqueProducts);
        updateResultCount(uniqueProducts.length)

    } catch (error) {
        handleLoadError(error);
    }
}

export function removeDuplicate(data) {
    try {
        let map = data.reduce((map, item) => {
            map.set(item.id, item);
            return map;
        }, new Map());

        let uniqueValues = map.values();

        return Array.from(uniqueValues);
    } catch (error) {
        console.error('Error removing duplicates', error);
    }
}

