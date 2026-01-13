/**
 * Policy Bridge - Navbar Functionality
 */

function initNavbar() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    // Close navbar when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = navbarCollapse.contains(event.target) || 
                             navbarToggler.contains(event.target);
        
        if (!isClickInside && navbarCollapse.classList.contains('show')) {
            bootstrap.Collapse.getInstance(navbarCollapse)?.hide();
        }
    });
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
            navbar.style.padding = '0.5rem 0';
        } else {
            navbar.classList.remove('shadow-lg');
            navbar.style.padding = '0.75rem 0';
        }
    });
}

window.initNavbar = initNavbar;

