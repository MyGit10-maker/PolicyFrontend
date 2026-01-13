/**
 * Policy Bridge - Quote Page Functions
 */

function initQuotePage() {
    // Quote form
    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateQuoteForm()) {
                calculateQuote();
            }
        });
    }
    
    // Calculate button
    const calculateBtn = document.getElementById('calculate-btn');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', function() {
            if (validateQuoteForm()) {
                calculateQuote();
            }
        });
    }
    
    // Policy type change
    const policyType = document.getElementById('policy-type');
    if (policyType) {
        policyType.addEventListener('change', function() {
            updateCoverageOptions(this.value);
        });
    }
}

function validateQuoteForm() {
    const requiredFields = ['policy-type', 'coverage-amount', 'policy-term', 'age'];
    let isValid = true;
    
    requiredFields.forEach(function(fieldId) {
        const field = document.getElementById(fieldId);
        if (field && !field.value) {
            field.classList.add('is-invalid');
            isValid = false;
        } else if (field) {
            field.classList.remove('is-invalid');
        }
    });
    
    return isValid;
}

function calculateQuote() {
    showNotification('Calculating your quote...', 'info');
    
    // Get form values
    const policyType = document.getElementById('policy-type').value;
    const coverage = parseFloat(document.getElementById('coverage-amount').value);
    const term = parseInt(document.getElementById('policy-term').value);
    const age = parseInt(document.getElementById('age').value);
    
    // Calculate premium (simplified calculation)
    let baseRate = 0;
    switch(policyType) {
        case 'health':
            baseRate = 0.003;
            break;
        case 'life':
            baseRate = 0.002;
            break;
        case 'motor':
            baseRate = 0.004;
            break;
        case 'home':
            baseRate = 0.0015;
            break;
        case 'travel':
            baseRate = 0.005;
            break;
    }
    
    const ageMultiplier = age > 45 ? 1.5 : 1;
    const termMultiplier = term > 1 ? term * 0.9 : 1;
    const annualPremium = coverage * baseRate * ageMultiplier * termMultiplier;
    
    // Show result
    setTimeout(() => {
        showQuoteResult(annualPremium, coverage, policyType);
    }, 1500);
}

function showQuoteResult(premium, coverage, type) {
    const resultContainer = document.getElementById('quote-result-container');
    if (resultContainer) {
        resultContainer.style.display = 'block';
        
        document.getElementById('premium-amount').textContent = '₹' + Math.round(premium).toLocaleString();
        document.getElementById('coverage-display').textContent = '₹' + coverage.toLocaleString();
        document.getElementById('policy-type-display').textContent = type.charAt(0).toUpperCase() + type.slice(1) + ' Insurance';
        
        // Scroll to result
        resultContainer.scrollIntoView({ behavior: 'smooth' });
    }
    
    showNotification('Quote calculated successfully!', 'success');
}

function updateCoverageOptions(policyType) {
    const coverageSelect = document.getElementById('coverage-amount');
    if (!coverageSelect) return;
    
    let minCoverage, maxCoverage;
    
    switch(policyType) {
        case 'health':
            minCoverage = 500000;
            maxCoverage = 10000000;
            break;
        case 'life':
            minCoverage = 1000000;
            maxCoverage = 50000000;
            break;
        case 'motor':
            minCoverage = 500000;
            maxCoverage = 20000000;
            break;
        case 'home':
            minCoverage = 1000000;
            maxCoverage = 100000000;
            break;
        case 'travel':
            minCoverage = 100000;
            maxCoverage = 5000000;
            break;
        default:
            minCoverage = 500000;
            maxCoverage = 10000000;
    }
    
    // Rebuild options
    coverageSelect.innerHTML = '';
    const amounts = [minCoverage, minCoverage * 2, minCoverage * 5, minCoverage * 10, maxCoverage];
    const labels = ['Basic', 'Standard', 'Premium', 'Super Premium', 'Maximum'];
    
    amounts.forEach((amount, index) => {
        const option = document.createElement('option');
        option.value = amount;
        option.textContent = labels[index] + ' - ₹' + (amount / 100000).toFixed(0) + ' Lakhs';
        coverageSelect.appendChild(option);
    });
}

window.initQuotePage = initQuotePage;
window.validateQuoteForm = validateQuoteForm;
window.calculateQuote = calculateQuote;
window.showQuoteResult = showQuoteResult;
window.updateCoverageOptions = updateCoverageOptions;

