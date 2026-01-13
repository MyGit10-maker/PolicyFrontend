/**
 * Policy Bridge - Footer Functionality
 */

function initFooter() {
    // Update current year in footer
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Footer link interactions
    const footerLinks = document.querySelectorAll('.footer-link');
    footerLinks.forEach(function(link) {
        link.addEventListener('mouseenter', function() {
            this.style.paddingLeft = '5px';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.paddingLeft = '';
        });
    });
    
    // Social media links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(function(link) {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const icon = this.querySelector('i');
            let platform = 'Social Media';
            
            if (icon.classList.contains('fa-facebook-f')) platform = 'Facebook';
            else if (icon.classList.contains('fa-twitter')) platform = 'Twitter';
            else if (icon.classList.contains('fa-instagram')) platform = 'Instagram';
            else if (icon.classList.contains('fa-linkedin-in')) platform = 'LinkedIn';
            
            showNotification(`Opening ${platform} page...`, 'info');
        });
    });
    
    // Contact links
    const contactLinks = document.querySelectorAll('.contact-item a');
    contactLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const href = this.getAttribute('href');
            
            if (href.startsWith('mailto:')) {
                showNotification(`Opening email client...`, 'info');
            } else if (href.startsWith('tel:')) {
                showNotification(`Initiating call to ${href.replace('tel:', '')}...`, 'info');
            } else {
                showNotification('Opening contact information...', 'info');
            }
        });
    });
    
    // Footer link hover effects with tracking
    const footerLinksTracking = document.querySelectorAll('.footer-links .footer-link');
    footerLinksTracking.forEach(link => {
        link.addEventListener('click', function(e) {
            const linkText = this.textContent.trim();
            console.log(`Footer link clicked: ${linkText}`);
        });
    });
    
    // Policy type links tracking
    const policyTypeLinks = document.querySelectorAll('.footer-links li:nth-child(-n+5) .footer-link');
    policyTypeLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const policyType = this.textContent.trim();
            console.log(`Policy type selected: ${policyType}`);
        });
    });
}

window.initFooter = initFooter;

