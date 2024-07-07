//  when click on menu icon

function handleCloseMenu() {
    const filtersMenu = document.querySelector('.filters-menu');
    filtersMenu.classList.remove('show-filters-menu');
    document.body.classList.remove('no-scroll');
}

function handleOpenMenu() {
    const filtersMenu = document.getElementById('filters-menu');
    const body = document.body;
    filtersMenu.classList.add('show-filters-menu');
    body.classList.add('no-scroll');
}
