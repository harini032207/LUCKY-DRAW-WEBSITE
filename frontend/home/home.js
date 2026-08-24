document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Toggle Mobile Menu
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        
        // Optional: Animate the button dots
        navToggle.classList.toggle('active');
    });

    // Close menu if a link is clicked
    document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
        navMenu.classList.remove('show');
    }));
});