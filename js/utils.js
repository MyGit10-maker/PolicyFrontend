/**
 * Policy Bridge - Utility Functions
 */

// Add active state to current page in navbar
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(function(link) {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
}

// Add number formatting utility
function formatCurrency(amount) {
    return '₹' + amount.toLocaleString('en-IN');
}

// Modal placeholder function
function showModal(title, modalId) {
    console.log(`Opening ${title} modal`);
    showNotification(`${title} functionality coming soon!`, 'info');
}

// Export for use in other modules
window.setActiveNavLink = setActiveNavLink;
window.formatCurrency = formatCurrency;
window.showModal = showModal;

