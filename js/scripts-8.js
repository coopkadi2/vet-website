const images = [
    'img/cover/JPEG/crescendo-003.jpg',
    'img/cover/JPEG/findlay-a-004.jpg',
    'img/cover/JPEG/riyadh-001.jpg',
    'img/cover/JPEG/tpcc-001.jpg',
    'img/cover/JPEG/lyons-002.jpg',
    'img/cover/JPEG/crescendo-001.jpg',
    'img/cover/JPEG/glenway-001.jpg'
];

// Pick a random image
const randomIndex = Math.floor(Math.random() * images.length);
const selectedImage = images[randomIndex];

// Simple preload function
function preloadImage(src) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.src = src;
    });
}

function navigateToProjects() {
    window.location.href = 'pages/projects.html';
}

// Remove preload all images function

document.addEventListener("DOMContentLoaded", async () => {
    const body = document.querySelector('.slideshow');
    if (!body) return;
    
    // Add loading state with a subtle loading indicator
    body.style.backgroundColor = '#000';
    body.style.position = 'relative';
    
    // Create animated loading dots
    const loadingDiv = document.createElement('div');
    loadingDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 20px;
        z-index: 1000;
        font-family: monospace;
    `;
    
    // Animate the dots
    const dots = ['', '.', '..', '...'];
    let dotIndex = 0;
    loadingDiv.textContent = dots[dotIndex];
    
    const dotInterval = setInterval(() => {
        dotIndex = (dotIndex + 1) % dots.length;
        loadingDiv.textContent = dots[dotIndex];
    }, 500);
    
    body.appendChild(loadingDiv);
    
    try {
        // Preload the selected image
        await preloadImage(selectedImage);
        
        // Stop dot animation and remove loading indicator
        clearInterval(dotInterval);
        loadingDiv.remove();
        
        // Set the random image as background
        body.style.backgroundImage = `url('${selectedImage}')`;
        
    } catch (error) {
        // Just remove the loading indicator if something goes wrong
        clearInterval(dotInterval);
        loadingDiv.remove();
    }
    
    // Add click handler to navigate to projects page
    body.addEventListener('click', (event) => {
        // Check if the click target is within the menu areas
        const menuAreas = document.querySelectorAll('.open, .closed');
        let clickedOnMenu = false;
        
        menuAreas.forEach(menuArea => {
            if (menuArea.contains(event.target)) {
                clickedOnMenu = true;
            }
        });
        
        // Only navigate if the click wasn't on a menu area
        if (!clickedOnMenu) {
            navigateToProjects();
        }
    });
    
    // Add cursor pointer to indicate it's clickable, but not over menu areas
    body.style.cursor = 'pointer';
    
    // Remove pointer cursor over menu areas and title
    const menuAreas = document.querySelectorAll('.open, .closed, .left');
    menuAreas.forEach(menuArea => {
        menuArea.style.cursor = 'default';
    });
});