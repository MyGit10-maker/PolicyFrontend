/**
 * Policy Bridge - Button Interactions
 */

function initButtons() {
    // Login button
    const loginBtn = document.querySelector('a[href="account.html"].btn-outline-primary');
    if (loginBtn) {
        loginBtn.addEventListener('click', function(event) {
            event.preventDefault();
            showModal('Login', 'login-modal');
        });
    }
    
    // Sign up button
    const signupBtn = document.querySelector('a[href="account.html"].btn-primary');
    if (signupBtn) {
        signupBtn.addEventListener('click', function(event) {
            event.preventDefault();
            showModal('Sign Up', 'signup-modal');
        });
    }
    
    // CTA buttons
    const ctaButtons = document.querySelectorAll('.hero-section .btn, .cta-section .btn');
    ctaButtons.forEach(function(btn) {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Service card buttons
    const serviceCardButtons = document.querySelectorAll('.service-card .btn');
    serviceCardButtons.forEach(function(btn) {
        btn.addEventListener('click', function(event) {
            event.preventDefault();
            const href = this.closest('.service-card').getAttribute('href');
            const cardTitle = this.closest('.card-body').querySelector('.card-title').textContent;
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
                showNotification(`Navigating to ${cardTitle}...`, 'info');
                
                // Simulate navigation after delay
                setTimeout(() => {
                    if (href && href !== '#') {
                        window.location.href = href;
                    }
                }, 500);
            }, 150);
        });
    });
}

window.initButtons = initButtons;

