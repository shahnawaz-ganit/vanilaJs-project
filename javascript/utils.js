
export function hideLoadMoreBtn() {
    document.getElementById('load-more-btn').style.display = 'none'
}
export function showLoadMoreBtn() {
    document.getElementById('load-more-btn').style.display = 'block'
    // document.getElementsById('product-section').style.textAlign = 'center';
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
    console.log("render products=>", products)
    const productContainer = document.querySelector('.products-list');
    const errorDiv = document.getElementById('error-container')
    productContainer.innerHTML = '';
    console.log("before ",errorDiv)

    if (products.length > 0) {
        errorDiv.style.display = 'none';
        console.log("after ",errorDiv)
        
        products.forEach(product => {
            const productDiv = createProductElement(product);
            productContainer.appendChild(productDiv);
        });
        // showLoadMoreBtn()
    }
    else {
        displayError('No Data Available')
        hideLoadMoreBtn()        
    }
}