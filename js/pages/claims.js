/**
 * Policy Bridge - Claims Page Functions
 */

function initClaimsPage() {
    // Claim form submission
    const claimForm = document.getElementById('claim-form');
    if (claimForm) {
        claimForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            if (validateClaimForm()) {
                showNotification('Submitting your claim...', 'info');
                
                // Simulate form submission
                setTimeout(() => {
                    showNotification('Claim submitted successfully! Reference: CLM-' + Math.random().toString(36).substr(2, 9).toUpperCase(), 'success');
                    claimForm.reset();
                }, 2000);
            }
        });
    }
    
    // File upload
    const fileInput = document.getElementById('claim-documents');
    if (fileInput) {
        fileInput.addEventListener('change', function() {
            const files = this.files;
            if (files.length > 0) {
                showNotification(`${files.length} file(s) selected`, 'success');
            }
        });
    }
    
    // Track claim button
    const trackBtn = document.getElementById('track-claim-btn');
    if (trackBtn) {
        trackBtn.addEventListener('click', function() {
            const claimId = document.getElementById('track-claim-id').value;
            if (claimId) {
                showNotification(`Tracking claim: ${claimId}`, 'info');
                // Show claim status
                showClaimStatus(claimId);
            } else {
                showNotification('Please enter a claim ID', 'warning');
            }
        });
    }
}

function validateClaimForm() {
    const requiredFields = ['policy-number', 'claim-type', 'incident-date', 'claim-amount', 'description'];
    let isValid = true;
    
    requiredFields.forEach(function(fieldId) {
        const field = document.getElementById(fieldId);
        if (field && !field.value.trim()) {
            field.classList.add('is-invalid');
            isValid = false;
        } else if (field) {
            field.classList.remove('is-invalid');
        }
    });
    
    return isValid;
}

function showClaimStatus(claimId) {
    // Simulate claim status
    const statuses = ['Pending Review', 'Under Investigation', 'Approved - Processing Payment', 'Documents Required'];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    
    setTimeout(() => {
        showNotification(`Claim ${claimId}: ${randomStatus}`, 'info');
    }, 1000);
}

window.initClaimsPage = initClaimsPage;
window.validateClaimForm = validateClaimForm;
window.showClaimStatus = showClaimStatus;

