// Active Navigation Highlighting
document.addEventListener('DOMContentLoaded', function() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Get all navigation buttons
    const navButtons = document.querySelectorAll('.nav-btn');
    
    // Remove active class from all buttons
    navButtons.forEach(button => {
        button.classList.remove('active');
        
        // Get the href attribute
        const href = button.getAttribute('href');
        
        // Check if this button links to the current page
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            button.classList.add('active');
        }
    });
});

// Smooth scroll for single-box content
const singleBoxes = document.querySelectorAll('.single-box');
singleBoxes.forEach(box => {
    box.style.scrollBehavior = 'smooth';
});

// Gallery scroll enhancement
const gallery = document.querySelector('.gallery');
if (gallery) {
    gallery.addEventListener('wheel', function(e) {
        if (e.deltaY !== 0) {
            e.preventDefault();
            gallery.scrollLeft += e.deltaY;
        }
    });
}

// Console message for developers
console.log('%c🎨 Personal Portfolio Website', 'color: #EE3895; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with HTML, CSS, JavaScript & AI Assistance', 'color: #ABCDCB; font-size: 14px;');
console.log('%cColor Palette: #000000, #FFFFFF, #F6D3DD, #EE3895, #ABCDCB', 'color: #F6D3DD; font-size: 12px;');

---

## **📋 Complete Folder Structure**
personal-website/
│
├── index.html
├── hobbies.html
├── education.html
├── goals.html
├── experience.html
├── resources.html
├── style.css
├── script.js
└── README.md (optional)