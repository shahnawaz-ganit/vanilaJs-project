
export function hideLoadMoreBtn() {
    document.getElementById('load-more-btn').style.display = 'none'
}


export function displayError(message) {
    const errorContainer = document.getElementById('error-container');
    errorContainer.textContent = message;
    errorContainer.style.display = 'block';
}


export function hideShimmer() {
    const shimmerContainer = document.querySelector('.shimmer-container');
    shimmerContainer.style.display = 'none';
}

export function showShimmer() {
    const shimmerContainer = document.querySelector('.shimmer-container');
    shimmerContainer.style.display = 'block';
}

export function handleLoadError(error) {
    hideLoadMoreBtn();
    hideShimmer();
    displayError('Error loading data. Please try again later.');
    console.error('Error fetching data:', error);
}


export function createProductElement(product) {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.title;
    productDiv.appendChild(img);

    const title = document.createElement('h3');
    title.textContent = product.title.slice(0, 10);
    productDiv.appendChild(title);

    const price = document.createElement('p');
    price.textContent = `$${product.price.toFixed(2)}`;
    productDiv.appendChild(price);

    return productDiv;
}

export function renderProducts(products) {
    const productContainer = document.querySelector('.products-list');
    productContainer.innerHTML = '';

    if(products.length > 0){
        products.forEach(product => {
            const productDiv = createProductElement(product);
            productContainer.appendChild(productDiv);
        });
    }else{
        displayError('No Data Available')
        hideLoadMoreBtn()
    }

    
}