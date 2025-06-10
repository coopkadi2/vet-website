const images = [
    'img/findlay-a-004.jpg',
    'img/tpcc-001.png',
    'img/riyadh-001.jpg',
    'img/lyons-001.jpg',
    'img/findlay-s-001.jpg'
];

// Fisher-Yates shuffle
for (let i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [images[i], images[j]] = [images[j], images[i]];
}

let currentIndex = 0;
let imagesLoaded = 0;
const totalImages = images.length;
let slideshowInterval;

// Preload all images
function preloadImages() {
    return new Promise((resolve) => {
        images.forEach((src, index) => {
            const img = new Image();
            img.onload = () => {
                imagesLoaded++;
                if (imagesLoaded === totalImages) {
                    resolve();
                }
            };
            img.onerror = () => {
                console.warn(`Failed to load image: ${src}`);
                imagesLoaded++;
                if (imagesLoaded === totalImages) {
                    resolve();
                }
            };
            img.src = src;
        });
    });
}

function changeBackground() {
    const body = document.querySelector('.slideshow');
    if (!body) return;
    
    currentIndex = (currentIndex + 1) % images.length;
    body.style.backgroundImage = `url('${images[currentIndex]}')`;
}

function startSlideshow() {
    // Clear any existing interval
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
    }
    // Start new interval
    slideshowInterval = setInterval(changeBackground, 8000);
}

function handleManualAdvance() {
    changeBackground();
    startSlideshow(); // Reset the timer
}

document.addEventListener("DOMContentLoaded", async () => {
    const body = document.querySelector('.slideshow');
    if (!body) return;
    
    // Add loading state (optional)
    body.style.backgroundColor = '#000'; // or your preferred loading color
    
    // Preload all images first
    await preloadImages();
    
    // Set initial image after all are loaded
    body.style.backgroundImage = `url('${images[0]}')`;
    
    // Start automatic slideshow
    startSlideshow();
    
    // Add click-to-advance with timer reset
    body.addEventListener('click', handleManualAdvance);
});