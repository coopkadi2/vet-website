document.addEventListener("DOMContentLoaded", function () {
    const closed = document.querySelector('.closed');
    const open = document.querySelector('.open');

    // Start with only the closed menu visible
    open.style.display = 'none';

    // Clicking the "closed" image shows the open menu
    const closedImage = document.querySelector('.menu-closed');
    closedImage.addEventListener('click', function () {
        closed.style.display = 'none';
        open.style.display = 'flex';
    });

    // Clicking the "open" image hides everything and goes back to "closed"
    const openImage = document.querySelector('.menu-open');
    openImage.addEventListener('click', function () {
        open.style.display = 'none';
        closed.style.display = 'flex';
    });
});