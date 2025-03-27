document.addEventListener('DOMContentLoaded', () => {
    // Update copyright year
    const yearElement = document.getElementById('year');
    yearElement.textContent = new Date().getFullYear();
    
    // Smooth scroll functionality
    document.querySelector('.scroll-indicator').addEventListener('click', () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Basic header transparency effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(13, 13, 18, 0.9)';
        } else {
            header.style.backgroundColor = 'transparent';
        }
    });
});