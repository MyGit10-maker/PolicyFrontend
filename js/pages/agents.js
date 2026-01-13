/**
 * Policy Bridge - Agents Page Functions
 */

function initAgentsPage() {
    // Search agents
    const searchForm = document.querySelector('.agents-search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchInput = this.querySelector('input[type="search"]');
            const searchTerm = searchInput.value.trim();
            
            if (searchTerm) {
                showNotification(`Searching for agents: "${searchTerm}"`, 'info');
                filterAgents(searchTerm);
            }
        });
    }
    
    // Filter by specialty
    const specialtyFilter = document.getElementById('specialty-filter');
    if (specialtyFilter) {
        specialtyFilter.addEventListener('change', function() {
            filterAgentsBySpecialty(this.value);
        });
    }
    
    // Consult buttons
    const consultButtons = document.querySelectorAll('.consult-btn');
    consultButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const agentName = this.getAttribute('data-agent');
            showNotification(`Contacting ${agentName}...`, 'info');
        });
    });
}

function filterAgents(searchTerm) {
    const agentCards = document.querySelectorAll('.agent-card');
    const term = searchTerm.toLowerCase();
    
    agentCards.forEach(function(card) {
        const name = card.querySelector('.agent-name').textContent.toLowerCase();
        const location = card.querySelector('.agent-location').textContent.toLowerCase();
        
        if (name.includes(term) || location.includes(term)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function filterAgentsBySpecialty(specialty) {
    const agentCards = document.querySelectorAll('.agent-card');
    
    agentCards.forEach(function(card) {
        const specialties = card.getAttribute('data-specialties');
        
        if (specialty === 'all' || specialties.includes(specialty)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

window.initAgentsPage = initAgentsPage;
window.filterAgents = filterAgents;
window.filterAgentsBySpecialty = filterAgentsBySpecialty;

