let lastScrollTop = 0;
const closedMenu = document.querySelector('.closed');

window.addEventListener('scroll', function () {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down – hide only the closed icon
        closedMenu.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up – show the closed icon again
        closedMenu.style.transform = 'translateY(0)';
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
