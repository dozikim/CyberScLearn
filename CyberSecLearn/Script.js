// Example script for interactivity
document.addEventListener('DOMContentLoaded', () => {
    console.log('CyberSecurity Hub Loaded!');
    
    // Add scroll effect for navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const target = document.querySelector(event.target.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
