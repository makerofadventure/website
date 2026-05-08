document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav ul');
    const header = document.querySelector('header');
    
    // Create menu toggle button if it doesn't exist (added via HTML usually, but here for robustness)
    let toggle = document.querySelector('.menu-toggle');
    if (!toggle) {
        toggle = document.createElement('button');
        toggle.className = 'menu-toggle';
        toggle.innerHTML = '&#9776; Menu';
        const navContainer = document.querySelector('nav');
        navContainer.prepend(toggle);
    }

    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Close menu when a link is clicked
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
});
