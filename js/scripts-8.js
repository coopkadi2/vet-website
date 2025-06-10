const images = [
    'img/findlay-a-004.jpg',
    'img/tpcc-001.png',
    'img/riyadh-001.jpg',
    'img/lyons-001.jpg',
    'img/findlay-s-001.jpg'
];

// Pick a random image
const randomIndex = Math.floor(Math.random() * images.length);
const selectedImage = images[randomIndex];

// Preload the selected image
function preloadImage() {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => {
            console.warn(`Failed to load image: ${selectedImage}`);
            reject();
        };
        img.src = selectedImage;
    });
}

function navigateToProjects() {
    window.location.href = 'pages/projects.html';
}

document.addEventListener("DOMContentLoaded", async () => {
    const body = document.querySelector('.slideshow');
    if (!body) return;
    
    // Add loading state
    body.style.backgroundColor = '#000';
    
    try {
        // Preload the selected image
        await preloadImage();
        
        // Set the random image as background
        body.style.backgroundImage = `url('${selectedImage}')`;
    } catch (error) {
        console.error('Failed to load background image');
        // Keep the black background if image fails to load
    }
    
    // Add click handler to navigate to projects page
    body.addEventListener('click', navigateToProjects);
    
    // Add cursor pointer to indicate it's clickable
    body.style.cursor = 'pointer';
});