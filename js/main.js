/**
 * Policy Bridge - Main Initialization
 */

// Console welcome message
console.log('%cWelcome to Policy Bridge!', 'color: #0066cc; font-size: 24px; font-weight: bold;');
console.log('%cInsurance Made Simple', 'color: #666; font-size: 14px;');
console.log('%cServices loaded successfully!', 'color: #28a745; font-size: 12px;');

// Add page load performance tracking
window.addEventListener('load', function() {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log(`%cPage loaded in ${loadTime}ms`, 'color: #0066cc; font-size: 12px;');
});

// Initialize all components on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize core components
    initNavbar();
    initSearch();
    initAnimations();
    initButtons();
    initServiceCards();
    initFooter();
    initSmoothScroll();
    initModals();
    initRippleStyles();
    initScrollToTop();
    
    // Initialize active nav link
    setActiveNavLink();
    
    // Initialize service card animations
    initServiceCardAnimations();
    
    // Initialize page-specific functionality
    initPageSpecific();
});

// Page specific initialization
function initPageSpecific() {
    // Check which page we're on
    const path = window.location.pathname;
    const pageName = path.split('/').pop() || 'index.html';
    
    // Initialize policies page
    if (pageName === 'policies.html') {
        initPoliciesPage();
    }
    
    // Initialize agents page
    if (pageName === 'agents.html') {
        initAgentsPage();
    }
    
    // Initialize claims page
    if (pageName === 'claims.html') {
        initClaimsPage();
    }
    
    // Initialize support page
    if (pageName === 'support.html') {
        initSupportPage();
    }
    
    // Initialize quote page
    if (pageName === 'quote.html') {
        initQuotePage();
    }
    
    // Initialize account page
    if (pageName === 'account.html') {
        initAccountPage();
    }
}

// Export for potential external use
window.initPageSpecific = initPageSpecific;

