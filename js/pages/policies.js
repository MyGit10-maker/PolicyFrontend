/**
 * Policy Bridge - Policies Page Functions
 */

function initPoliciesPage() {
    // Check for search query
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    
    if (searchQuery) {
        showNotification(`Showing results for: "${searchQuery}"`, 'info');
        filterPolicies(searchQuery);
    }
    
    // Filter buttons
    const filterButtons = document.querySelectorAll('.policy-filter-btn');
    filterButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter policies
            filterPolicies(filter);
        });
    });
    
    // Buy Now buttons
    const buyButtons = document.querySelectorAll('.buy-now-btn');
    buyButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const policyName = this.getAttribute('data-policy');
            showNotification(`Added ${policyName} to cart!`, 'success');
        });
    });
}

function filterPolicies(filter) {
    const policyCards = document.querySelectorAll('.policy-card');
    
    policyCards.forEach(function(card) {
        const category = card.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.5s ease';
        } else {
            card.style.display = 'none';
        }
    });
}

window.initPoliciesPage = initPoliciesPage;
window.filterPolicies = filterPolicies;

