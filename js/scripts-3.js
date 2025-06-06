document.addEventListener("DOMContentLoaded", function () {
    const closed = document.querySelector('.closed');
    const open = document.querySelector('.open');

    // Start with only the closed menu visible
    open.classList.add('menu-inactive');
    open.style.display = 'none';
    closed.classList.remove('menu-inactive');
    closed.style.display = 'flex';

    // Open the menu
    const closedImage = document.querySelector('.menu-closed');
    closedImage.addEventListener('click', function () {
        open.style.display = 'flex';
        open.classList.remove('menu-inactive');
        closed.classList.add('menu-inactive');
        closed.style.display = 'none';
    });

    // Close the menu
    const openImage = document.querySelector('.menu-open');
    openImage.addEventListener('click', function () {
        open.style.display = 'none';
        open.classList.add('menu-inactive');
        closed.classList.remove('menu-inactive');
        closed.style.display = 'flex';
    });
});
