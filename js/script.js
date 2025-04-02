// Placeholder for future JavaScript functionality

document.addEventListener('DOMContentLoaded', () => {
    console.log('Gallery Initialized');

    const galleryContainer = document.querySelector('.gallery-container');
    const imageFiles = [
        "pawel-czerwinski-4ft6rZYMLpE-unsplash.jpg",
        "up-modern-RKt_MULcX7g-unsplash.jpg",
        "up-modern-bm8A-MmCphI-unsplash.jpg",
        "a-chosen-soul-vfnJkEA2MgY-unsplash.jpg",
        "ridho-ibrahim-m5bekWHgWDg-unsplash.jpg",
        "tasha-kostyuk-VTLbgAKsDM0-unsplash.jpg",
        "milad-fakurian-xa0RPbhmbdA-unsplash.jpg",
        "milad-fakurian-RwOPwy0UFEY-unsplash.jpg",
        "hassaan-here-Th4-Mh07abc-unsplash.jpg",
        "tsd-studio-mohZSVHMSoY-unsplash.jpg",
        "ridho-ibrahim-4KzwdaUQF3A-unsplash.jpg",
        "a-chosen-soul-sNQf2ySMcj8-unsplash.jpg"
    ];

    if (galleryContainer) {
        galleryContainer.innerHTML = ''; // Clear existing placeholders if any
        const titles = ["Abstract", "Modern", "Portrait", "Landscape", "Texture", "Nature", "Urban", "Design", "Pastel", "Vibrant", "Minimal", "Geometric"]; // Example titles

        imageFiles.forEach((fileName, index) => {
            const item = document.createElement('div');
            item.classList.add('gallery-item');

            // Create a container for the image
            const imageContainer = document.createElement('div');
            imageContainer.classList.add('image-container');

            const img = document.createElement('img');
            img.src = `images/${fileName}`;
            img.alt = `Gallery image ${index + 1}`;
            img.loading = 'lazy';

            // Append image to its container
            imageContainer.appendChild(img);

            // Create caption paragraph
            const caption = document.createElement('p');

            // Create span for title
            const titleSpan = document.createElement('span');
            titleSpan.classList.add('caption-title');
            // Cycle through example titles or use index
            titleSpan.textContent = titles[index % titles.length];

            // Create span for year
            const yearSpan = document.createElement('span');
            yearSpan.classList.add('caption-year');
            // Generate random year (e.g., 2015-2024)
            yearSpan.textContent = Math.floor(Math.random() * (2024 - 2015 + 1)) + 2015;

            // Append spans to caption
            caption.appendChild(titleSpan);
            caption.appendChild(yearSpan);

            // Append image container and caption to the main item
            item.appendChild(imageContainer);
            item.appendChild(caption);
            galleryContainer.appendChild(item);
        });
    }

    // TODO: Implement Infinite Scrolling / Pagination
    // TODO: Implement Image Upload
    // TODO: Implement Search/Filter
    // TODO: Implement User Authentication interactions
    // TODO: Implement Likes, Comments, Shares

    // Set current year in footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Modal Functionality
    const aboutLink = document.getElementById('about-link');
    const modalOverlay = document.getElementById('about-overlay');
    const closeModalButton = document.getElementById('close-modal');

    const openModal = () => {
        if (modalOverlay) {
            modalOverlay.classList.add('active');
        }
    };

    const closeModal = () => {
        if (modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    };

    if (aboutLink) {
        aboutLink.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            openModal();
        });
    }

    if (closeModalButton) {
        closeModalButton.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        // Close modal if overlay (background) is clicked
        modalOverlay.addEventListener('click', (e) => {
            // Only close if the direct overlay is clicked, not the modal content itself
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }

    // Theme Toggle Functionality
    const themeToggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    // Apply saved theme on initial load
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');

            // Save preference to localStorage
            let theme = 'light';
            if (document.body.classList.contains('dark-mode')) {
                theme = 'dark';
            }
            localStorage.setItem('theme', theme);
        });
    }
}); 