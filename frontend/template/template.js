document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Mobile Hamburger Toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }

    // Optional: Smooth Fade-in on load
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease';
    window.onload = () => {
        document.body.style.opacity = '1';
    };
});