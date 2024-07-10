function handleCloseMenu() {
    const filtersMenu = document.querySelector('.filters-menu');
    filtersMenu.classList.remove('show-filters-menu');
    
    // After transition complete
    filtersMenu.addEventListener('transitionend', function() {
        if (!filtersMenu.classList.contains('show-filters-menu')) {
            filtersMenu.style.display = 'none';
        }
    }, { once: true });

    document.body.classList.remove('no-scroll');
}

function handleOpenMenu() {
    const filtersMenu = document.querySelector('.filters-menu');
    const body = document.body;

    filtersMenu.style.display = 'flex';
    filtersMenu.offsetHeight;
    filtersMenu.classList.add('show-filters-menu');
    body.classList.add('no-scroll');
}
