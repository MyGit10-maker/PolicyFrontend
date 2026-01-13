/**
 * Policy Bridge - Search Functionality
 */

function initSearch() {
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-form input[type="search"]');
    
    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const searchTerm = searchInput.value.trim();
            
            if (searchTerm.length > 0) {
                // Simulate search functionality
                showNotification(`Searching for: "${searchTerm}"`, 'success');
                console.log('Search term:', searchTerm);
                
                // Redirect to policies page with search query
                setTimeout(() => {
                    window.location.href = `policies.html?search=${encodeURIComponent(searchTerm)}`;
                }, 1000);
            } else {
                showNotification('Please enter a search term', 'warning');
                searchInput.focus();
            }
        });
        
        // Add live search feedback
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.trim();
            if (searchTerm.length > 0) {
                this.style.backgroundColor = '#fff';
            }
        });
    }
}

window.initSearch = initSearch;

