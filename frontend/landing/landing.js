document.addEventListener('DOMContentLoaded', () => {
    const enterLink = document.getElementById('enter-link');

    enterLink.addEventListener('click', function(e) {
        // Prevent immediate navigation
        e.preventDefault();
        const destination = this.href;

        // Add the fade-out class to the body
        document.body.classList.remove('fade-in');
        document.body.classList.add('fade-out');

        // Wait for the animation (1.5s) then redirect
        setTimeout(() => {
            window.location.href = destination;
        }, 1500);
    });
});