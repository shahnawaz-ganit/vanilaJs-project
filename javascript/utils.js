
const loadMoreBtn = document.getElementById('load-more-btn');
const shimmerContainer = document.querySelector('.shimmer-container');
const errorContainer = document.getElementById('error-container');
const productContainer = document.querySelector('.products-list');
const resultCount1 = document.getElementById('result-count-1');
const resultCount2 = document.getElementById('result-count-2');

export function hideLoadMoreBtn() {
    try {
        if (loadMoreBtn) {
            loadMoreBtn.style.display = 'none';
        }
    } catch (error) {
        console.error('Error hiding load more button:', error);
    }
}

export function showLoadMoreBtn() {
    try {
        if (loadMoreBtn) {
            loadMoreBtn.style.display = 'block';
        }
    } catch (error) {
        console.error('Error showing load more button:', error);
    }
}

export function displayError(message) {
    try {
        if (errorContainer) {
            errorContainer.textContent = message;
            errorContainer.style.display = 'block';
        }
    } catch (error) {
        console.error('Error displaying error message:', error);
    }
}

export function hideShimmer() {
    try {
        if (shimmerContainer) {
            shimmerContainer.style.display = 'none';
        }
    } catch (error) {
        console.error('Error hiding shimmer:', error);
    }
}

export function showShimmer() {
    try {
        if (shimmerContainer) {
            shimmerContainer.style.display = 'block';
        }
    } catch (error) {
        console.error('Error showing shimmer:', error);
    }
}

export function handleLoadError(error) {
    try {
        hideLoadMoreBtn();
        hideShimmer();
        displayError('Error loading data. Please try again later.');
    } catch (e) {
        console.error('Error handling load error:', e);
    }
    console.error('Error fetching data:', error);
}

export function createProductElement(product) {
    try {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.title;
        productDiv.appendChild(img);

        const title = document.createElement('h3');
        title.textContent = product.title.slice(0, 11);
        productDiv.appendChild(title);

        const price = document.createElement('p');
        price.textContent = `$${product.price.toFixed(2)}`;
        productDiv.appendChild(price);

        const heartIcon = document.createElement('p');
        heartIcon.classList.add('heart-icon-container');
        heartIcon.innerHTML = '<i class="far fa-heart"></i>';
        productDiv.appendChild(heartIcon);

        return productDiv;
    } catch (error) {
        console.error('Error creating product element:', error);
    }
}

export function renderProducts(products) {
    try {
        if (productContainer) {
            productContainer.innerHTML = '';

            if (products.length > 0) {
                if (errorContainer) {
                    errorContainer.style.display = 'none';
                }
                products.forEach(product => {
                    const productDiv = createProductElement(product);
                    productContainer.appendChild(productDiv);
                });
            } else {
                displayError('No Data Available');
                hideLoadMoreBtn();
            }
        }
    } catch (error) {
        console.error('Error rendering products:', error);
    }
}

export function updateResultCount(count) {
    try {
        if (resultCount1) {
            resultCount1.textContent = `${count} Results`;
        }
        if (resultCount2) {
            resultCount2.textContent = `${count} Results`;
        }
    } catch (error) {
        console.error('Error updating result count:', error);
    }
}
