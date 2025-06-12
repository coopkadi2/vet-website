// Archive page functionality
(function() {
    'use strict';

    // Configuration
    const IMAGES_PER_BATCH = 20; // Load 20 images at a time
    let currentIndex = 0;
    let isLoading = false;

    // Create intersection observer for lazy loading
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const skeleton = img.previousElementSibling;
                
                img.src = img.dataset.src;
                img.onload = () => {
                    img.classList.add('loaded');
                    if (skeleton) skeleton.remove();
                };
                img.onerror = () => {
                    if (skeleton) skeleton.remove();
                    img.style.display = 'none';
                };
                
                observer.unobserve(img);
            }
        });
    }, { rootMargin: '50px' });

    // Create overlay click handler
    function setupOverlay() {
        const overlay = document.getElementById('overlay');
        
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay || e.target.tagName === 'IMG') {
                overlay.style.display = 'none';
                const menuOpen = document.querySelector('.menu-open');
                if (menuOpen) {
                    menuOpen.classList.remove('disabled');
                }
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && overlay.style.display === 'flex') {
                overlay.style.display = 'none';
                const menuOpen = document.querySelector('.menu-open');
                if (menuOpen) {
                    menuOpen.classList.remove('disabled');
                }
            }
        });
    }

    // Load a batch of images
    function loadImageBatch() {
        if (isLoading || currentIndex >= archiveImages.length) return;
        
        isLoading = true;
        const container = document.getElementById('archiveContainer');
        const loadMoreBtn = document.getElementById('loadMore');
        const endIndex = Math.min(currentIndex + IMAGES_PER_BATCH, archiveImages.length);
        
        loadMoreBtn.classList.add('loading');
        loadMoreBtn.textContent = 'Loading...';

        for (let i = currentIndex; i < endIndex; i++) {
            const imageData = archiveImages[i];
            
            // Create skeleton placeholder
            const skeleton = document.createElement('div');
            skeleton.className = 'archive-skeleton';
            
            // Create image element
            const img = document.createElement('img');
            img.className = 'archive';
            img.alt = imageData.alt;
            img.dataset.src = imageData.src;
            img.style.cursor = 'pointer';
            
            // Add click handler for overlay
            img.addEventListener('click', function() {
                const overlay = document.getElementById('overlay');
                overlay.innerHTML = `<img src="${this.src}" alt="${this.alt}">`;
                overlay.style.display = 'flex';
                const menuOpen = document.querySelector('.menu-open');
                if (menuOpen) {
                    menuOpen.classList.add('disabled');
                }
            });
            
            container.appendChild(skeleton);
            container.appendChild(img);
            
            // Start observing the image for lazy loading
            imageObserver.observe(img);
        }
        
        currentIndex = endIndex;
        
        // Update load more button
        setTimeout(() => {
            loadMoreBtn.classList.remove('loading');
            if (currentIndex >= archiveImages.length) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.textContent = `Load More Images (${archiveImages.length - currentIndex} remaining)`;
            }
            isLoading = false;
        }, 500);
    }

    // Auto-load more when scrolling near bottom
    function setupAutoScroll() {
        let autoLoadTimeout;
        window.addEventListener('scroll', () => {
            clearTimeout(autoLoadTimeout);
            autoLoadTimeout = setTimeout(() => {
                if (!isLoading && currentIndex < archiveImages.length) {
                    const scrollPercent = (window.scrollY + window.innerHeight) / document.body.scrollHeight;
                    if (scrollPercent > 0.8) {
                        loadImageBatch();
                    }
                }
            }, 100);
        });
    }

    // Initialize the page
    function init() {
        // Check if archiveImages is available
        if (typeof archiveImages === 'undefined') {
            console.error('Archive images data not loaded');
            return;
        }

        setupOverlay();
        
        // Load initial batch
        loadImageBatch();
        
        // Show load more button if there are more images
        const loadMoreBtn = document.getElementById('loadMore');
        if (archiveImages.length > IMAGES_PER_BATCH) {
            loadMoreBtn.style.display = 'block';
            loadMoreBtn.textContent = `Load More Images (${archiveImages.length - IMAGES_PER_BATCH} remaining)`;
            
            loadMoreBtn.addEventListener('click', loadImageBatch);
        }
        
        // Setup auto-scroll loading
        setupAutoScroll();
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();